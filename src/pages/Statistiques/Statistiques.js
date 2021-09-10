import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import localeData from 'dayjs/plugin/localeData'
import { useState } from 'react'
import { TitleOne } from '../../components'
import Calendar from '../Plan/components/Calendar'
import { SliderData } from './components'
import { StatistiquesAction } from '../../middlewares/actions'
import { useDispatch, useSelector } from 'react-redux'
import { ProfilPuissance } from './components'
import reload from '../../assets/reload.svg'

dayjs.extend(weekOfYear)
dayjs.extend(localeData)
dayjs.locale('fr')

const Statistiques = () => {
    const dispatch = useDispatch()

    const [date, setdate] = useState(dayjs())
    const statistiques = useSelector((state) => state.statistiques.state)
    const months = [
        'janvier',
        'fevrier',
        'mars',
        'avril',
        'mai',
        'juin',
        'juillet',
        'aout',
        'septembre',
        'octobre',
        'novembre',
        'decembre',
    ]

    if (statistiques === undefined || statistiques === null) {
        dispatch(StatistiquesAction.getStatistiques())
    }

    const handleDate = (value) => {
        setdate(dayjs(value))
    }

    return statistiques !== undefined & statistiques !== null ? (
        <div className="column stats">
            <div
                onClick={() => {
                    dispatch(StatistiquesAction.getStatistiques())
                }}
                className="reload btn"
            >
                <img src={reload} alt="Reload icon" />
            </div>
            <a href="/accueil" className="is-white p-2">
                Accueil
            </a>
            <TitleOne title="Statistiques" />
            <ProfilPuissance />
            <Calendar date={date} onChange={handleDate} />
            <SliderData
                title="Semaine"
                distance={
                    statistiques.entrainement[date.year() - 2000]['2021']
                        .semaines[`S${date.week() - 1}`].kilometres
                }
                sse={
                    statistiques.entrainement[date.year() - 2000]['2021']
                        .semaines[`S${date.week() - 1}`].sse
                }
                temps={
                    statistiques.entrainement[date.year() - 2000]['2021']
                        .semaines[`S${date.week() - 1}`].heures
                }
                nombre_seances={
                    statistiques.entrainement[date.year() - 2000]['2021']
                        .semaines[`S${date.week() - 1}`].nombre_entrainement
                }
                deniv={0}
            />
            <SliderData
                title="Mois"
                distance={
                    statistiques.entrainement[date.year() - 2000]['2021'].mois[
                        `${months[date.month()]}`
                    ].kilometres
                }
                sse={
                    statistiques.entrainement[date.year() - 2000]['2021'].mois[
                        `${months[date.month()]}`
                    ].sse
                }
                temps={
                    statistiques.entrainement[date.year() - 2000]['2021'].mois[
                        `${months[date.month()]}`
                    ].heures
                }
                nombre_seances={
                    statistiques.entrainement[date.year() - 2000]['2021'].mois[
                        `${months[date.month()]}`
                    ].nombre_entrainement
                }
                deniv={0}
            />
        </div>
    ) : (
        'Chargement'
    )
}

export default Statistiques
