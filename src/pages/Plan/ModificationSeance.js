import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Recherche } from '../Seances'
import dayjs from 'dayjs'
import fr from 'dayjs/locale/fr'
import { TitleOne, TitleThree, BarChart } from '../../components'
import duree from '../../assets/chrono.svg'
import deniv from '../../assets/montagnes.svg'
import distance from '../../assets/la-navigation.svg'

console.log(fr)
dayjs().locale('fr')

const ModificationSeance = (props) => {
    const params = useParams()
    const seance = useSelector((state) => state.plan.seance_day)

    console.log(seance)

    return typeof seance !== 'string' ? (
        <div className="column">
            <TitleOne
                title={`${dayjs(params.date).format('dddd')} ${dayjs(
                    params.date
                ).format('DD/MM/YYYY')}`}
                className="title is-1  has-text-centered is-capitalized"
            />
            <div className="column">
                <TitleThree title={seance.titre} color="is-light" />
                <div className="graphique-container mx-auto">
                    <BarChart
                        entrainement={seance}
                        width={220}
                        id={seance._id}
                    />
                </div>
                <div className="pl-4 has-text-centered my-3">
                    {seance.description}
                </div>
                <div className="columns is-mobile is-justify-content-center mt-1">
                    <img
                        src={distance}
                        alt="Distance A et B, course de cyclisme"
                        width="45"
                    />
                    <p className="is-light">
                        <strong>Distance</strong>
                    </p>

                    <p>{seance.estimation_distance} km</p>
                </div>
                <div className="columns is-mobile is-justify-content-center mt-1">
                    <img
                        src={duree}
                        alt="Chronomètre, course de cyclisme"
                        width="45"
                    />
                    <p className="is-light">
                        <strong>Durée</strong>
                    </p>
                    <p>
                        {seance.duree.split(':')[0]}h
                        {seance.duree.split(':')[1]}
                    </p>
                </div>
                <div className="columns is-mobile is-justify-content-center mt-1">
                    <img
                        src={deniv}
                        alt="Dénivéle montagne, course de cyclisme"
                        width="45"
                    />
                    <p className="is-light">
                        <strong>Dénivelé</strong>
                    </p>

                    <p>{seance.estimation_deniv} m</p>
                </div>
            </div>
            <div className="column mb-6">
                <Recherche
                    modification={true}
                    date={params.date}
                    planId={params.planId}
                />
            </div>
        </div>
    ) : (
        <div>
            <TitleOne
                title={`${dayjs(params.date).format('dddd')} ${dayjs(
                    params.date
                ).format('DD/MM/YYYY')}`}
                className="title is-1  has-text-centered is-capitalized"
            />
            <div className="column is-capitalized has-text-centered">
                {seance}
            </div>
            <div className="column mb-6">
                <Recherche
                    modification={true}
                    date={params.date}
                    planId={params.planId}
                />
            </div>
        </div>
    )
}

export default ModificationSeance
