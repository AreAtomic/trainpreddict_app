import { TitleFive, BarChart, ButtonSecondaryLarge } from '../../../components'

const Choice = () => {
    sessionStorage.removeItem('creationseance')
    return (
        <div className="column">
            <div className="card training choice">
                <TitleFive title="Modèle" color="is-light" />
                <hr />
                <TitleFive title="Foncier" color="is-light" />
                <div className="graphique-container">
                    <BarChart
                        entrainement={{
                            _id: '5f429151c317710d095bcb14',
                            specifique: ['Z2: 02:00:00'],
                            titre: 'Foncier',
                            type: ['Rythme'],
                            duree: '02:00:00',
                            estimation_distance: 40,
                            estimation_deniv: 700,
                            Z1: '00:00:00',
                            Z2: '00:30:00',
                            Z3: '00:36:00',
                            Z4: '00:01:00',
                            Z5: '00:04:00',
                            Z6: '00:00:00',
                            Z7: '00:00:00',
                            puissance_moyenne: 0.65,
                            charge_entrainement_estime: 81,
                            intensite_travail: 143,
                            score_stress_entrainement: 112,
                            specifique_description: {},
                        }}
                        width={170}
                        id={'5f429151c317710d095bcb14'}
                    />
                </div>
                <div className="sse">80</div>
            </div>
            <a
                href="/seances/concepteur/modele"
                className="column has-text-centered mt-2 mb-5"
            >
                <ButtonSecondaryLarge nom="Choisir un modèle" />
            </a>
            <div className="card training choice">
                <TitleFive title="Partir de zéro" color="is-light" />
                <hr />
                <TitleFive title="A définir" color="is-light" />
                <div
                    className="graphique-container mb-2"
                    style={{ height: '120px' }}
                ></div>
                <div className="sse">-</div>
            </div>
            <a
                href="/seances/concepteur/creation"
                className="column has-text-centered mt-2 mb-5"
            >
                <ButtonSecondaryLarge nom="Partir de zéro" />
            </a>
        </div>
    )
}

export default Choice
