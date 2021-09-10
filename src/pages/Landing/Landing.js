import React from 'react'
import { Redirect } from 'react-router'
import montagne from '../../assets/montagne.svg'
import logo from '../../assets/logo_rond_rose.svg'
import { LocationAction } from '../../middlewares/actions'

/* Composants */
import {
    Accordion,
    TitleFour,
    ButtonPrimaryLarge,
    ButtonSecondaryLarge,
} from '../../components'

const Landing = (props) => {
    /* Redirection */
    if (props.user.isLogged) {
        LocationAction.setLocation('Accueil')
        return <Redirect to="/accueil" />
    }

    return (
        <div className="landing">
            <div className="background">
                <img
                    src={logo}
                    alt="Logo TrainPreddict, application pour cilcyste"
                    className="logo"
                />
                <div className="grid-button">
                    <a href="/connexion">
                        <ButtonPrimaryLarge nom="Connexion" />
                    </a>
                    <a href="/inscription">
                        <ButtonSecondaryLarge nom="Inscription" />
                    </a>
                </div>
                <img
                    className="montagne"
                    src={montagne}
                    alt="Fond montagne TrainPreddict avec des cycliste à l'entrainement."
                />
            </div>
            <div className="container is-light-blue is-full-fullhd">
                <section className="column" id="fonctionnalites">
                    <TitleFour
                        title="Nos fonctionnalités"
                    />
                    <Accordion title="Définir un objectif et s'y tenir">
                        <p>
                            En passant d'une course sur laquelle tu souhaites
                            gagner, à une cyclosportive sur laquelle tu
                            souhaites arriver en forme ou encore un roadtrip que
                            tu souhaites réaliser, tu peux rentrer cet objectif
                            dans TrainPreddict afin de pouvoir
                            <span className="is-primary">
                                {' '}
                                être présent le jour J.
                            </span>
                            <br />
                            <br />
                            TrainPreddict te permet de détailler ton objectif
                            avec grande précision : distance, dénivelé, temps
                            estimé, type d'objectif. Tout ces détails permettent
                            à TrainPreddict de
                            <span className="is-primary">
                                {' '}
                                calculer au mieux ton plan d'entraînement.
                            </span>
                        </p>
                    </Accordion>
                    <Accordion title="Un plan sur mesure">
                        <p>
                            Lors de ton inscription TrainPreddict te pose un
                            très grand nombre de questions afin de mieux
                            <span className="is-primary">
                                {' '}
                                comprendre ton profil
                            </span>
                            , cela lui permettra d'adapter au mieux tes plans
                            d'entraînements en fonction de ton âge, ton temps
                            disponible, tes capacités ...
                            <br />
                            <br />
                            Chaque séance peut-être
                            <span className="is-primary">
                                {' '}
                                modifée ou remplacée{' '}
                            </span>
                            par la séance de ton choix, cela te permet de garder
                            la main sur ton entraînement si tu le souhaite.
                        </p>
                    </Accordion>
                    <Accordion title="Analyse des entraînements">
                        <p>
                            A chaque fois que tu téléverses tes entraînements,
                            un algorithme
                            <span className="is-primary">
                                {' '}
                                analyse ton entraînement.{' '}
                            </span>
                            Suite à cette analyse il en ressort le temps que tu
                            as passé dans chaque zone, Fréquence cardiaque et
                            Puissance, ainsi que ta moyenne pondérée en watts.
                            <br />
                            <br />
                            Ces courbes d'analyse sont accompagnées d'une
                            analyse écrite de ton entraînement, cela te permet
                            de
                            <span className="is-primary">
                                {' '}
                                mieux comprendre{' '}
                            </span>
                            comment l'entraînement impacte ton niveau de forme.
                            <br />
                            <br />
                            Enfin les derniers composants de l'analyse de ton
                            entraînement sont l'intensité de travail, le score
                            de stress et ton ressenti. Ces trois éléments
                            permettent de
                            <span className="is-primary">
                                {' '}
                                mettre à jour ta courbe de forme
                            </span>
                            , pour que tu puisses évaluer ta courbe réelle avec
                            la courbe prévisionnelle et adapter ton plan.
                        </p>
                    </Accordion>
                    <Accordion title="Analyse des entraînements">
                        <p>
                            Ce qui fait réellement la différence ce sont les
                            deux courbes prévisionnelles :
                            <span className="is-primary">
                                {' '}
                                ton niveau de forme{' '}
                            </span>
                            et
                            <span className="is-primary">
                                {' '}
                                ton niveau de fatigue.{' '}
                            </span>
                            Tes courbes sont d'abord calculées en fonction du
                            plan qui est créé, si tu modifies ton plan alors tu
                            modifies également tes courbes.
                            <br />
                            <br />
                            Lorsque tu téléverses tes entraînements,
                            <span className="is-primary">
                                {' '}
                                ta courbe est recalculée{' '}
                            </span>
                            pour avoir tes courbes en fonction de ce que
                            <span className="is-primary"> tu as réalisé </span>
                            comme entraînements et non plus un prévisionnel en
                            fonction de ton plan.
                            <br />
                            <br />
                            La courbe de forme est calculée par un pourcentage
                            en fonction de
                            <span className="is-primary">
                                {' '}
                                ton pic de forme{' '}
                            </span>
                            prévisionnel. Pour ce qui est de la fatigue, c'est
                            un nombre indicatif que tu pourras mieux jauger avec
                            l'habitude.
                        </p>
                    </Accordion>
                    <Accordion title="Le plus">
                        <p>
                            Ce qui fait réellement la différence ce sont les
                            deux courbes prévisionnelles : ton niveau de forme
                            et ton niveau de fatigue. Tes courbes sont d'abord
                            calculées en fonction du plan qui est créé, si tu
                            modifies ton plan alors tu modifies également tes
                            courbes.
                            <br />
                            <br />
                            Lorsque tu téléverses tes entraînements, ta courbe
                            est recalculée pour avoir tes courbes en fonction de
                            ce que tu as réalisé comme entraînements et non plus
                            un prévisionnel en fonction de ton plan.
                            <br />
                            <br />
                            La courbe de forme est calculée par un pourcentage
                            en fonction de ton pic de forme prévisionnel. Pour
                            ce qui est de la fatigue, c'est un nombre indicatif
                            que tu pourras mieux jauger avec l'habitude.
                        </p>
                    </Accordion>
                </section>
                <div className="column">
                    <TitleFour
                        title="Notre besoin de bêta testeurs"
                        id="testeurs"
                    />
                    <p>
                        L'application est faites pour les cyclistes par les
                        cyclistes. C'est dans l'objectif de récolter les données
                        nécessaires à l'entrainement de l'intelligence
                        artificielle que nous lançons cette phase de tes. De
                        plus cette phase de test vous permet à vous testeurs de
                        nous faire des retours sur les fonctionnalités afin de
                        faire évoluer l'application dans votre sens!
                        <br />
                        <br />
                        Pour votre soutien et l'aide que vous nous apportez,
                        nous offrirons aux testeurs les plus assidus 1 an
                        d'abonnement car sans vous nous n'y arriverons pas.
                    </p>
                </div>
                <div className="column">
                    <TitleFour title="Nos références" id="references" />
                    <p>
                        L'algorithme de calcul du plan d'entrainement est à
                        l'heure actuelle basé sur des système de mise en place
                        validé par des recherches universitaires. Le plans sont
                        des plans fiables mais pour le moment pas 100%
                        personnalisé. L'objectif avec cette de phase de test est
                        d'atteindre 100% de personnalisation!
                        <br />
                    </p>
                </div>
            </div>
            <div className="footer">
                <span>
                    Pour toutes informations complémentaires :
                    <span className="is-primary">
                        {' '}
                        contact@trainpreddict.fr
                    </span>
                </span>
                <span>
                    Pour tout besoin d’assistance :
                    <span className="is-primary">
                        {' '}
                        support@trainpreddict.fr
                    </span>
                </span>
            </div>
        </div>
    )
}

export default Landing
