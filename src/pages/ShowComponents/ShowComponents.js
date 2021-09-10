import React from 'react'
import dayjs from 'dayjs'
import icone from '../../assets/bicycle.svg'
// Composants
import {
    TitleOne,
    TitleTwo,
    TitleThree,
    TitleFour,
    TitleFive,
    TitleSix,
    ButtonPrimaryLarge,
    ButtonSecondaryLarge,
    ButtonPrimaryMedium,
    ButtonSecondaryMedium,
    ButtonPrimarySmall,
    ButtonSecondarySmall,
    ButtonPrimaryExtraSmall,
    ButtonSecondaryExtraSmall,
    Input,
    InputUnit,
    Select,
    SelectMultiple,
    AreaChartAnalyse,
    AreaChartSuivi,
    Accordion,
    Card,
    CardTraining,
    DoghnutsAnalyse,
    Slider,
    Hexagone,
    TableZone,
    Upload,
    TableTraining,
} from '../../components'

const entrainement = {
    _id: '5fccad5af8b8168e15039c2f',
    type: ['Seuil'],
    specifique: [
        'Z1:00:05:00',
        'Z2:01:15:00',
        'Z3:00:05:00',
        'Z2:00:02:30',
        'Z4:00:05:00',
        'Z2:00:02:30',
        'Z5:00:05:00',
        'Z6:00:02:30',
        'Z7:00:05:00',
        'Z2:00:02:30',
        'Z2:00:10:00',
        'Z1:00:05:00',
    ],
    titre: "Seuil #4*5'",
    duree: '01:55:00',
    estimation_distance: 55,
    estimation_deniv: 250,
    description:
        "Sortie de seuil avec 4*5'Z4 pour débuter, à utiliser en sortie de reprise de seuil. Sortie peu stressante",
    Z1: '00:10:00',
    Z2: '01:35:00',
    Z3: '00:00:00',
    Z4: '00:20:00',
    Z5: '00:00:00',
    Z6: '00:00:00',
    Z7: '00:00:00',
    puissance_moyenne: 0.53,
    charge_entrainement_estime: 102,
    intensite_travail: 170,
    score_stress_entrainement: 136,
    __v: 0,
    specifique_description: {},
}

const ShowComponents = () => {

    return (
        <div className="main">
            <div className="container">
                <div className="columns pt-2">
                    <div className="column">
                        <TitleOne title="Bienvenue" />
                        <TitleTwo title="Bienvenue" />
                        <TitleThree title="Bienvenue" />
                        <TitleFour title="Bienvenue" />
                        <TitleFive title="Bienvenue" />
                        <TitleSix title="Bienvenue" />
                        <ButtonPrimaryLarge nom="Bouton" />
                        <ButtonPrimaryMedium nom="Bouton" />
                        <ButtonPrimarySmall nom="Bouton" />
                        <ButtonPrimaryExtraSmall nom="Bouton" />
                    </div>
                    <div className="column">
                        <TitleOne title="Bienvenue" color="is-light" />
                        <TitleTwo title="Bienvenue" color="is-light" />
                        <TitleThree title="Bienvenue" color="is-light" />
                        <TitleFour title="Bienvenue" color="is-light" />
                        <TitleFive title="Bienvenue" color="is-light" />
                        <TitleSix title="Bienvenue" color="is-light" />
                        <ButtonSecondaryLarge nom="Bouton" />
                        <ButtonSecondaryMedium nom="Bouton" />
                        <ButtonSecondarySmall nom="Bouton" />
                        <ButtonSecondaryExtraSmall nom="Bouton" />
                    </div>
                </div>
                <div className="columns">
                    <div className="form">
                        <TitleOne title="Formulaire" />
                        <div className="columns">
                            <div className="column">
                                <Input label="Prénom" value="" error={true} />
                            </div>
                            <div className="column">
                                <Input label="Nom" value="" error={true} />
                            </div>
                        </div>
                        <div className="column px-3">
                            <Input label="Email" value="" error={false} />
                        </div>
                        <div className="column px-3">
                            <InputUnit
                                label="Dénivelé"
                                type="number"
                                unit="m"
                                value=""
                                error={false}
                            />
                        </div>
                        <div className="column px-3">
                            <Select
                                label="Sélection simple"
                                type="number"
                                error={false}
                                options={[
                                    '',
                                    'Option 1',
                                    'Option 2',
                                    'Option 3',
                                ]}
                            />
                        </div>
                        <div className="column px-3">
                            <SelectMultiple
                                label="Sélection multiple"
                                value=""
                                error={false}
                                options={[
                                    '',
                                    'Option 1',
                                    'Option 2',
                                    'Option 3',
                                ]}
                            />
                        </div>
                    </div>
                </div>
                <Accordion title="Définir un objectif et s'y tenir">
                    <p>
                        En passant d'une course sur laquelle tu souhaites
                        gagner, à une cyclosportive sur laquelle tu souhaites
                        arriver en forme ou encore un roadtrip que tu souhaites
                        réaliser, tu peux rentrer cet objectif dans
                        TrainPreddict afin de pouvoir être présent le jour J.
                        <br />
                        TrainPreddict te permet de détailler ton objectif avec
                        grande précision : distance, dénivelé, temps estimé,
                        type d'objectif. Tout ces détails permettent à
                        TrainPreddict de calculer au mieux ton plan
                        d'entraînement.
                    </p>
                </Accordion>
                <div className="columns">
                    <DoghnutsAnalyse
                        type="BPM"
                        Z1={10}
                        Z2={20}
                        Z3={500}
                        Z4={150}
                        Z5={50}
                        moyenne={180}
                        id="bpm"
                    />
                    <DoghnutsAnalyse
                        type="Watt"
                        Z1={10}
                        Z2={20}
                        Z3={500}
                        Z4={150}
                        Z5={50}
                        Z6={5}
                        Z7={1}
                        moyenne={220}
                        id="watt"
                    />
                </div>
                <Slider>
                    <Card>
                        <TitleFive title="Courbe d'analyse" color="is-light" />
                        <AreaChartAnalyse
                            data={[
                                120, 190, 195, 196, 196, 191, 120, 120, 190,
                                195, 196, 196, 191, 120, 120, 190, 195, 196,
                                196, 191, 120, 120, 190, 195, 196, 196, 191,
                                120, 120, 190, 195, 196, 196, 191, 120, 120,
                                190, 195, 196, 196, 191, 120, 120, 190, 195,
                                196, 196, 191, 120, 120, 190, 195, 196, 196,
                                191, 120, 120, 190, 195, 196, 196, 191, 120,
                                120, 190, 195, 196, 196, 191, 120, 120, 190,
                                195, 196, 196, 191, 120, 120, 190, 195, 196,
                                196, 191, 120, 120, 190, 195, 196, 196, 191,
                                120, 120, 190, 195, 196, 196, 191, 120, 120,
                                190, 195, 196, 196, 191, 120, 120, 190, 195,
                                196, 196, 191, 120,
                            ]}
                            nomData="FC"
                            nomLabel="Temps"
                            id="test"
                            date={dayjs().hour(0).minute(0).second(0)}
                            color={{ stroke: '#FEFEFE', fill: '#0FE0FE' }}
                            nom="FC"
                        />
                    </Card>
                    <Card>
                        <TitleFive title="Courbe de fatigue" color="is-light" />
                        <AreaChartSuivi
                            dataPrev={[120, 190, 195, 196, 196, 191]}
                            dataRea={[127, 195, 191, 196, 200, 210]}
                            nomDataPrev="Prévisionnelle"
                            nomDataRea="Réalisée"
                            nomLabel="Temps"
                            id="test_suivi"
                            labels={[
                                '02/12/2021',
                                '02/13/2021',
                                '02/14/2021',
                                '02/15/2021',
                                '02/16/2021',
                                '02/17/2021',
                            ]}
                            date={dayjs().hour(0).minute(0).second(0)}
                            color={{
                                stroke: { prev: '#FEFEFE', rea: '#FEFEFE' },
                                fill: { prev: '#0FE0FE', rea: '#E01A4F' },
                            }}
                        />
                    </Card>
                </Slider>
                <CardTraining
                    date="03/01/2021"
                    type={entrainement.type}
                    sse={entrainement.score_stress_entrainement}
                    entrainement={entrainement}
                />
                <div className="columns">
                    <Hexagone>
                        <TitleFive title="Test" color="is-dark" />
                        <img src={icone} alt="Vélo" />
                    </Hexagone>
                    <Hexagone color="is-light">
                        <TitleFive title="Test" color="is-dark" />
                        <img src={icone} alt="Vélo" />
                    </Hexagone>
                    <Hexagone color="is-info">
                        <TitleFive title="Test" color="is-dark" />
                        <img src={icone} alt="Vélo" />
                    </Hexagone>
                </div>
                <TableZone />
            </div>
            <Upload />
            <TableTraining
                entrainements={[
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                    {
                        date: '27/01/2021',
                        type: '254641234156.fit',
                        distance: 80,
                        duree: '03:00:00',
                        score_stress_entrainement: 110,
                        _id: '656546dfergrf68',
                    },
                ]}
            />
        </div>
    )
}

export default ShowComponents
