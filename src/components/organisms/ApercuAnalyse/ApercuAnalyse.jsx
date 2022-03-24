import React, { useState } from 'react'
import {
    ButtonPrimarySmall,
    Cell,
    HeadingFive,
    Doghnut,
    HeadingFour,
    CourbesFC,
    CourbesPuissance,
} from '../../atoms'
import { BarChart, Comment } from '../../molecules'
import * as middlewares from '../../../middlewares'
import { useDispatch, useSelector } from 'react-redux'
import { secondsToTimeWithSeconds } from '../../../utils'

const ApercuAnalyse = (props) => {
    const dispatch = useDispatch()
    const [viewFull, setViewFull] = useState(false)
    console.log(props.entrainement)

    return (
        <div className="grid bg-component-two-500 px-6 py-3">
            {!viewFull ? (
                <>
                    <div className="flex justify-between mb-3">
                        <div className="text-xl text-medium-contrast-500">
                            {props.entrainement.type}
                        </div>
                        <ButtonPrimarySmall
                            onClick={() => {
                                setViewFull(!viewFull)
                            }}
                        >
                            Voir plus
                        </ButtonPrimarySmall>
                    </div>
                    <div className="flex">
                        <div className="grid">
                            <div className="flex">
                                <HeadingFive>Indicateurs :</HeadingFive>
                                <Cell>
                                    {
                                        props.entrainement
                                            .score_stress_entrainement
                                    }{' '}
                                    SSE
                                </Cell>
                                <Cell>
                                    {props.entrainement.intensite_travail} IT
                                </Cell>
                                <Cell>
                                    {props.entrainement.ressentis} Ressentis
                                </Cell>
                            </div>
                            <div className="flex">
                                <HeadingFive>Puissance :</HeadingFive>
                                <Cell>
                                    {props.entrainement.power_moy} W(Moy.)
                                </Cell>
                                <Cell>
                                    {props.entrainement.normalized_power}{' '}
                                    W(Pond.)
                                </Cell>
                                <Cell>
                                    {props.entrainement.power_max} W(Max.)
                                </Cell>
                            </div>
                            <div className="flex">
                                <HeadingFive>Fréquence cardiaque :</HeadingFive>
                                <Cell>
                                    {props.entrainement.fc_moy} BPM(Moy.)
                                </Cell>
                                <Cell>
                                    {props.entrainement.fc_max} BPM(Max.)
                                </Cell>
                            </div>
                            <div className="flex">
                                <HeadingFive>Déplacement :</HeadingFive>
                                <Cell>{props.entrainement.duree}</Cell>
                                <Cell>{props.entrainement.distance} km</Cell>
                                <Cell>{props.entrainement.deniv} m(D+)</Cell>
                            </div>
                            <div className="grid">
                                <Comment
                                    comments={props.comments}
                                    value={props.newComment}
                                    setValue={(e) => {
                                        props.setNewComment(e)
                                    }}
                                    saveComment={() => {
                                        props.saveComment()
                                    }}
                                    onBlur={() => {
                                        console.log(
                                            'Local save new comment : ',
                                            props.newComment
                                        )
                                        dispatch(
                                            middlewares.setNewComment(
                                                props.newComment
                                            )
                                        )
                                    }}
                                />
                            </div>
                        </div>
                        <div className="grid h-fit mt-5 ml-3">
                            <HeadingFour>Zones de travail</HeadingFour>
                            <BarChart
                                entrainement={props.entrainement}
                                width={500}
                            />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex justify-between mb-3">
                        <div className="text-xl text-medium-contrast-500">
                            {props.entrainement.titre ||
                                props.entrainement.type}
                        </div>
                        <ButtonPrimarySmall
                            onClick={() => {
                                setViewFull(!viewFull)
                            }}
                        >
                            Retour
                        </ButtonPrimarySmall>
                    </div>
                    <div className="flex">
                        <div className="grid">
                            <div className="flex">
                                <HeadingFive>Indicateurs :</HeadingFive>
                                <Cell>
                                    {
                                        props.entrainement
                                            .score_stress_entrainement
                                    }{' '}
                                    SSE
                                </Cell>
                                <Cell>
                                    {props.entrainement.intensite_travail} IT
                                </Cell>
                                <Cell>
                                    {props.entrainement.ressentis} Ressentis
                                </Cell>
                            </div>
                            <div className="flex">
                                <HeadingFive>Puissance :</HeadingFive>
                                <Cell>
                                    {props.entrainement.power_moy} W(Moy.)
                                </Cell>
                                <Cell>
                                    {props.entrainement.normalized_power}{' '}
                                    W(Pond.)
                                </Cell>
                                <Cell>
                                    {props.entrainement.power_max} W(Max.)
                                </Cell>
                            </div>
                            <div className="flex">
                                <HeadingFive>Fréquence cardiaque :</HeadingFive>
                                <Cell>
                                    {props.entrainement.fc_moy} BPM(Moy.)
                                </Cell>
                                <Cell>
                                    {props.entrainement.fc_max} BPM(Max.)
                                </Cell>
                            </div>
                            <div className="flex">
                                <HeadingFive>Déplacement :</HeadingFive>
                                <Cell>{props.entrainement.duree}</Cell>
                                <Cell>{props.entrainement.distance} km</Cell>
                                <Cell>{props.entrainement.deniv} m(D+)</Cell>
                            </div>
                            <div className="grid">
                                <Comment
                                    comments={props.comments}
                                    value={props.newComment}
                                    setValue={(e) => {
                                        props.setNewComment(e)
                                    }}
                                    saveComment={() => {
                                        props.saveComment()
                                    }}
                                    onBlur={() => {
                                        console.log(
                                            'Local save new comment : ',
                                            props.newComment
                                        )
                                        dispatch(
                                            middlewares.setNewComment(
                                                props.newComment
                                            )
                                        )
                                    }}
                                />
                            </div>
                            <div className="grid mt-6">
                                {props.entrainement.power_moy && (
                                    <>
                                        <HeadingFour>Puissance</HeadingFour>
                                        <Doghnut
                                            zones={
                                                props.entrainement.power_zone
                                            }
                                            moy={props.entrainement.power_moy}
                                        />
                                    </>
                                )}
                            </div>
                            <div className="grid mt-6">
                                {props.entrainement.fc_moy && (
                                    <>
                                        <HeadingFour>
                                            Fréquence cardiaque
                                        </HeadingFour>
                                        <Doghnut
                                            zones={props.entrainement.zone_fc}
                                            moy={props.entrainement.fc_moy}
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="grid h-fit mt-5 ml-3">
                            <HeadingFour>Zones de travail</HeadingFour>
                            <BarChart
                                entrainement={props.entrainement}
                                width={500}
                            />
                            {props.entrainement.power_moy && (
                                <>
                                    <div className="mb-10"></div>
                                    <HeadingFour>
                                        Courbe de puissance
                                    </HeadingFour>
                                    <CourbesPuissance
                                        time={props.entrainement.n10_power.map(
                                            (point, index) => {
                                                return secondsToTimeWithSeconds(
                                                    index * 10
                                                )
                                            }
                                        )}
                                        power={props.entrainement.n10_power.map(
                                            (value) => {
                                                return parseInt(value)
                                            }
                                        )}
                                    />
                                </>
                            )}
                            {props.entrainement.fc_moy && (
                                <>
                                    <div className="mb-10"></div>
                                    <HeadingFour>
                                        Courbe de fréquence cardiaque
                                    </HeadingFour>
                                    <CourbesFC
                                        time={props.entrainement.n10_fc.map(
                                            (point, index) => {
                                                return secondsToTimeWithSeconds(
                                                    index * 10
                                                )
                                            }
                                        )}
                                        fc={props.entrainement.n10_fc.map(
                                            (value) => {
                                                return parseInt(value)
                                            }
                                        )}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default ApercuAnalyse
