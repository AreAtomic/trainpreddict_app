import React from 'react'
import { ButtonSecondaryMedium } from '../../components'
import bicycle from '../../assets/bicycle-blue.svg'
import newseance from '../../assets/new.svg'
import all from '../../assets/all-seance.svg'
import arrow from '../../assets/Arrow 1.svg'
import logo from '../../assets/logo.svg'

const Seances = () => {
    return (
        <div>
            <a href="/accueil" className="is-white p-2">
                Accueil
            </a>
            <div className="grid">
                <a className=" column" href="/seances/televersement">
                    <div className="upload-images">
                        <img
                            src={bicycle}
                            alt="Vélo bleu, TrainPreddict séance sur mesure de haut niveau"
                        />
                        <img
                            src={arrow}
                            alt="Flèche, TrainPreddict séance sur mesure de haut niveau"
                        />
                        <img
                            src={logo}
                            alt="Logo TrainPreddict, Application pour cycliste"
                        />
                    </div>
                    <ButtonSecondaryMedium nom="Téléversement" />
                </a>
                <a className=" column" href="/seances/concepteur">
                    <img
                        src={newseance}
                        alt="Carré plus, création de plan d'entrainement cycliste sur mesure"
                    />
                    <ButtonSecondaryMedium nom="Créer une nouvelle séance" />
                </a>
                <a className=" column" href="/seances/recherche">
                    <img
                        src={all}
                        alt="Quatre petit carré, grande base de données de séances d'entrainement cycliste"
                    />
                    <ButtonSecondaryMedium nom="Toutes les séances" />
                </a>
            </div>
        </div>
    )
}

export default Seances
