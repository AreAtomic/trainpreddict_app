import { useState } from 'react'
import { useDispatch } from 'react-redux'
import dayjs from 'dayjs'
// TODO: replace by good one
import { ButtonPrimary, ButtonSecondary } from '../../atoms'
import * as services from '../../../services'
import { useSelector } from 'react-redux'

const Upload = (props) => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)

    const [file, setFile] = useState([])

    return (
        <div className="upload-box">
            <div className="field-file border-low-contrast border rounded px-2 py-16">
                <ButtonPrimary>Choisir un fichier</ButtonPrimary>
                <input
                    multiple
                    type="file"
                    className="is-white input-file"
                    onChange={(e) => {
                        if (e.target.files.length === undefined) {
                            setFile([...file])
                            if (file.length === 0) {
                                props.toast.warning(
                                    'Veuillez choisir un fichier'
                                )
                            }
                        } else {
                            let newfiles = [...file]
                            for (let i = 0; i < e.target.files.length; i++) {
                                const newfile = e.target.files[i]
                                /** No error */
                                if (newfile.name.split('.')[1] === 'fit') {
                                    newfiles.push(newfile)
                                } else {
                                    /** Error */
                                    props.toast.warning(
                                        'Le fichier doit être une .fit'
                                    )
                                }
                            }
                            setFile(newfiles)
                        }
                    }}
                />
                <div className="files flex">
                    {file !== []
                        ? file.map((item, i) => {
                              return (
                                  <div className="file-name-upload text-low-contrast-500">
                                      {item.name}
                                      <button
                                          aria-label="close"
                                          value={i}
                                          onClick={(e) => {
                                              const removeIndex = i
                                              const newfile = []
                                              for (
                                                  let i = 0;
                                                  i < file.length;
                                                  i++
                                              ) {
                                                  if (i !== removeIndex) {
                                                      newfile.push(file[i])
                                                  }
                                              }
                                              setFile(newfile)
                                          }}
                                      >
                                          X
                                      </button>
                                  </div>
                              )
                          })
                        : ''}
                </div>
            </div>
            <ButtonSecondary
                onClick={(e) => {
                    for (let i = 0; i < file.length; i++) {
                        services
                            .postEntrainementFile(auth.token, file[i])
                            .then((res) => {
                                if (res.msg) {
                                    const date = res.data.date.split('T')[0]
                                    const statistiques = {
                                        time: res.data.duree,
                                        distance: Math.round(
                                            res.data.distance,
                                            2
                                        ),
                                        sse: res.data.score_stress_entrainement,
                                        denivele: res.data.deniv,
                                        nombreSeance: 1,
                                    }
                                    services
                                        .putDayCalendrierDone(
                                            date,
                                            auth.token,
                                            res.data._id,
                                            true,
                                            statistiques
                                        )
                                        .then((response) => {
                                            props.toast.success(res.msg)
                                        })
                                        .catch((err) =>
                                            props.toast.success(res.msg)
                                        )
                                } else props.toast.error(res.error)
                            })
                            .catch((err) => {
                                props.toast.error(err)
                            })
                    }
                }}
            >
                Sauvegarder la séance
            </ButtonSecondary>
        </div>
    )
}

export default Upload
