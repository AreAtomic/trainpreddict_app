import {
    CardTraining,
    Slider,
    TitleSix,
    ButtonPrimaryMedium,
} from '../../../components'
import { useSelector, useDispatch } from 'react-redux'
import { PlanAction } from '../../../middlewares/actions'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import fr from 'dayjs/locale/fr'
import weekOfYear from 'dayjs/plugin/weekOfYear'
dayjs.extend(weekOfYear)
console.log(fr)
dayjs().locale('fr')

const PlanDisplay = (props) => {
    // State
    const dispatch = useDispatch()
    const plan = useSelector((state) => state.plan.state)
    const prepare = useSelector((state) => state.plan.prepare)

    // Plan
    const [week, setweek] = useState(undefined)
    const [isPlan, setisPlan] = useState(undefined)
    const [defaultPlan, setDefaultPlan] = useState(0)

    if (prepare) {
        if (process.env.NODE_ENV === 'development') {
            window.location.assign(
                `http://${window.location.hostname}:${window.location.port}/objectif`
            )
        } else {
            window.location.assign(
                `https://${window.location.hostname}:${window.location.port}/objectif`
            )
        }
    }

    if (plan === undefined) {
        dispatch(PlanAction.getPlan())
    }

    // Update on change date
    useEffect(() => {
        if (plan !== undefined) {
            // Recup du bon plan
            plan.forEach((p, i) => {
                if (dayjs(props.date).isBefore(dayjs(p.date_fin))) {
                    if (dayjs(props.date).isAfter(dayjs(p.date_debut))) {
                        setDefaultPlan(i)
                    }
                }
            })

            // Recup de la semaine active
            let temp = []
            if(plan[defaultPlan] !== undefined) {
                plan[defaultPlan].SeancesDefinies.forEach((seance) => {
                    if (
                        dayjs(seance[1]).week() === dayjs(props.date).week() &&
                        dayjs(seance[1]).year() === dayjs(props.date).year()
                    ) {
                        temp.push(seance)
                    }
                })
            }
            setweek(temp)
            setisPlan(temp.length > 0)
        }
    }, [props.date, plan, defaultPlan])

    return week !== undefined ? (
        <div>
            {isPlan ? (
                <div>
                    <div className="is-hidden-mobile">
                        <div className="columns">
                            {week.length > 0 ? (
                                <CardTraining
                                    date={week[0][1]}
                                    entrainement={week[0][0]}
                                    plan={true}
                                    id={plan[defaultPlan]._id}
                                />
                            ) : null}
                            {week.length > 1 ? (
                                <CardTraining
                                    date={week[1][1]}
                                    plan={true}
                                    entrainement={week[1][0]}
                                    id={plan[defaultPlan]._id}
                                />
                            ) : null}
                            {week.length > 2 ? (
                                <CardTraining
                                    date={week[2][1]}
                                    entrainement={week[2][0]}
                                    plan={true}
                                    id={plan[defaultPlan]._id}
                                />
                            ) : null}
                        </div>
                        <div className="columns">
                            {week.length > 3 ? (
                                <CardTraining
                                    date={week[3][1]}
                                    entrainement={week[3][0]}
                                    plan={true}
                                    id={plan[defaultPlan]._id}
                                />
                            ) : null}
                            {week.length > 4 ? (
                                <CardTraining
                                    date={week[4][1]}
                                    entrainement={week[4][0]}
                                    plan={true}
                                    id={plan[defaultPlan]._id}
                                />
                            ) : null}
                            {week.length > 5 ? (
                                <CardTraining
                                    date={week[5][1]}
                                    entrainement={week[5][0]}
                                    id={plan[defaultPlan]._id}
                                />
                            ) : null}
                        </div>
                        <div className="columns">
                            {week.length > 6 ? (
                                <CardTraining
                                    date={week[6][1]}
                                    entrainement={week[6][0]}
                                    plan={true}
                                    id={plan[defaultPlan]._id}
                                />
                            ) : null}
                        </div>
                    </div>
                    <div className="is-hidden-tablet">
                        <Slider>
                            {week.map((item, i) => {
                                return (
                                    <CardTraining
                                        date={week[i][1]}
                                        entrainement={week[i][0]}
                                        plan={true}
                                        id={plan[defaultPlan]._id}
                                    />
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            ) : (
                <div className="column no-plan">
                    <TitleSix
                        title="Aucun plan généré pour cette semaine"
                        color="is-light"
                    />
                    <div
                        onClick={() => {
                            dispatch(PlanAction.preparePlan())
                        }}
                        className="m-auto"
                    >
                        <ButtonPrimaryMedium nom="Générer un plan" />
                    </div>
                </div>
            )}
        </div>
    ) : (
        'Chargement'
    )
}

export default PlanDisplay
