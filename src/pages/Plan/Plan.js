import { TitleOne } from '../../components'
import { PlanDisplay, Calendar } from './components'
import { useState } from 'react'
import dayjs from 'dayjs'
import fr from 'dayjs/locale/fr'
import { useDispatch } from 'react-redux'
import { PlanAction } from '../../middlewares/actions'
import reload from '../../assets/reload.svg'
dayjs().locale('fr')
console.log(fr)

const Plan = () => {
    const dispatch = useDispatch()
    const [date, setdate] = useState(dayjs())

    const handleDate = (value) => {
        setdate(dayjs(value))
    }

    return (
        <div>
            <div
                onClick={() => {
                    dispatch(PlanAction.getPlan())
                }}
                className="reload btn"
            >
                <img src={reload} alt="Reload icon"/>
            </div>
            <a href="/accueil" className="is-white p-2">
                Accueil
            </a>
            <TitleOne title="Plan d'entrainement" />
            <Calendar date={date} onChange={handleDate} />
            <PlanDisplay date={date} />
        </div>
    )
}

export default Plan
