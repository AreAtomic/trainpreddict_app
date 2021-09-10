import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
    CourbesAction,
    MessageAction,
    StatistiquesAction,
} from '../../middlewares/actions'
import { SeancesServices } from '../../middlewares/services'

import { ButtonPrimaryMedium } from '..'
import { ButtonSecondaryMedium } from '../Button'
import question from '../../assets/question-red.svg'
import ReactTooltip from 'react-tooltip'

const Upload = (props) => {
    const dispatch = useDispatch()

    /* Value */
    const [file, setFile] = useState([])

    return (
        <div className="upload-box">
            <div className="field-file">
                <ButtonPrimaryMedium nom="Choisir un fichier" />
                <ReactTooltip />
                <img
                    src={question}
                    alt="Question rouge TrainPreddict, application pour cycliste"
                    data-tip="Le fichier à téléverser doit en être en .fit"
                    data-background-color="#000000"
                    data-multiline={true}
                />
                <input
                    multiple
                    type="file"
                    className="is-white input-file"
                    onChange={(e) => {
                        console.log(e.target.files)
                        if (e.target.files.length === undefined) {
                            setFile([...file])
                            if (file.length === 0) {
                                dispatch(
                                    MessageAction.setMessage({
                                        type: 'warning',
                                        message: 'Veuillez choisir un fichier',
                                    })
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
                                    dispatch(
                                        MessageAction.setMessage({
                                            type: 'warning',
                                            message:
                                                'Le fichier doit être une .fit',
                                        })
                                    )
                                }
                            }
                            setFile(newfiles)
                        }
                    }}
                />
                <div className="files">
                    {file !== []
                        ? file.map((item, i) => {
                              return (
                                  <div className="file-name-upload">
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
            <ButtonSecondaryMedium
                nom="Sauvegarder la séance"
                onClick={(e) => {
                    let errors = 0
                    let create = 0
                    for (let i = 0; i < file.length; i++) {
                        let actaulerror = errors
                        let actualcreate = create
                        dispatch(SeancesServices.post_entrainement(file[i]))
                            .then((response) => {
                                if (response.status === 200) {
                                    actualcreate += 1
                                    dispatch(
                                        StatistiquesAction.putStatistiquesEntrainement(
                                            response.data.data
                                        )
                                    )
                                    dispatch(CourbesAction.putCourbesRealise())
                                    dispatch(
                                        MessageAction.setMessage({
                                            type: 'success',
                                            message: `Entrainement ${
                                                file[i].name
                                            } créé avec succès ${
                                                actualcreate + 1 - actaulerror
                                            } / ${file.length}`,
                                        })
                                    )
                                } else {
                                    actaulerror += 1
                                    dispatch(
                                        MessageAction.setMessage({
                                            type: 'warning',
                                            message: `Impossible de créer l'entrainement ${
                                                file[i].name
                                            }, ${response.data.error}.  ${
                                                actualcreate + 1 - actaulerror
                                            } / ${file.length}`,
                                        })
                                    )
                                }
                            })
                            .catch((err) => {
                                actaulerror += 1
                                dispatch(
                                    MessageAction.setMessage({
                                        type: 'warning',
                                        message: `Impossible de créer l'entrainement ${
                                            file[i].name
                                        }: ${err.message}.  ${
                                            actualcreate + 1 - actaulerror
                                        } / ${file.length}`,
                                    })
                                )
                            })
                        errors = actaulerror
                        create = actualcreate
                    }
                }}
            />
        </div>
    )
}

export default Upload
