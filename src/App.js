import React from 'react'
import './theme/custome-theme.sass'
import dayjs from 'dayjs'
import icone from './assets/bicycle.svg'
// Composants
import {
  NavbarLogged,
  NavbarUnlogged,
  LogoRond,
  ContextBar,
  LogoContextBar,
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
  Textarea,
  MessageInfo,
  MessageSuccess,
  MessageAlerte,
  MessageDanger,
  AreaChartAnalyse,
  AreaChartSuivi,
  Accordion,
  Card,
  DoghnutsAnalyse,
  Slider,
  Hexagone,
  TableZone,
  zone_1, zone_2, zone_3, zone_4, zone_5, zone_6, zone_7
} from './components'

const App = () => {
  const location = window.location.pathname.split('/')[1]

  const variable_css = () => {
    const root_css = document.querySelector(':root')
    root_css.style.setProperty('--zone-1', zone_1)
    root_css.style.setProperty('--zone-2', zone_2)
    root_css.style.setProperty('--zone-3', zone_3)
    root_css.style.setProperty('--zone-4', zone_4)
    root_css.style.setProperty('--zone-5', zone_5)
    root_css.style.setProperty('--zone-6', zone_6)
    root_css.style.setProperty('--zone-7', zone_7)
  }

  variable_css()

  return (
    <div className="main">
      <NavbarLogged location={location === '' ? 'Accueil' : location} />
      <NavbarUnlogged />
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
            <TitleOne title="Bienvenue" color='is-light' />
            <TitleTwo title="Bienvenue" color='is-light' />
            <TitleThree title="Bienvenue" color='is-light' />
            <TitleFour title="Bienvenue" color='is-light' />
            <TitleFive title="Bienvenue" color='is-light' />
            <TitleSix title="Bienvenue" color='is-light' />
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
              <InputUnit label="Dénivelé" type="number" unit="m" value="" error={false} />
            </div>
            <div className="column px-3">
              <Select label="Sélection simple" type="number" error={false} options={["", "Option 1", "Option 2", "Option 3"]} />
            </div>
            <div className="column px-3">
              <SelectMultiple label="Sélection multiple" value="" error={false} options={["", "Option 1", "Option 2", "Option 3"]} />
            </div>
          </div>
        </div>
        <Accordion title="Définir un objectif et s'y tenir">
          <p>En passant d'une course sur laquelle tu souhaites gagner, à une cyclosportive sur laquelle tu souhaites arriver en forme ou encore un roadtrip que tu souhaites réaliser, tu peux rentrer cet objectif dans TrainPreddict afin de pouvoir être présent le jour J.
            <br />
            TrainPreddict te permet de détailler ton objectif avec grande précision : distance, dénivelé, temps estimé, type d'objectif. Tout ces détails permettent à TrainPreddict de calculer au mieux ton plan d'entraînement.</p>
        </Accordion>
        <div className="columns">
          <DoghnutsAnalyse type="BPM" Z1={10} Z2={20} Z3={500} Z4={150} Z5={50} moyenne={180} id="bpm" />
          <DoghnutsAnalyse type="Watt" Z1={10} Z2={20} Z3={500} Z4={150} Z5={50} Z6={5} Z7={1} moyenne={220} id="watt" />
        </div>
        <Slider>
          <Card>
            <TitleFive title="Courbe d'analyse" color='is-light' />
            <AreaChartAnalyse
              data={[120, 190, 195, 196, 196, 191, 120, 120, 190, 195, 196, 196, 191, 120, 120, 190, 195, 196, 196, 191, 120, 120, 190, 195, 196, 196, 191, 120, 120, 190, 195, 196, 196, 191, 120, 120, 190, 195, 196, 196, 191, 120, 120, 190, 195, 196, 196, 191, 120, 120, 190, 195, 196, 196, 191, 120, 120, 190, 195, 196, 196, 191, 120, 120, 190, 195, 196, 196, 191, 120, 120, 190, 195, 196, 196, 191, 120, 120, 190, 195, 196, 196, 191, 120, 120, 190, 195, 196, 196, 191, 120, 120, 190, 195, 196, 196, 191, 120, 120, 190, 195, 196, 196, 191, 120, 120, 190, 195, 196, 196, 191, 120]}
              nomData="FC"
              nomLabel="Temps"
              id="test"
              date={dayjs().hour(0).minute(0).second(0)}
              color={{ stroke: "#FEFEFE", fill: "#0FE0FE" }}
              nom="FC"
            />
          </Card>
          <Card>
            <TitleFive title="Courbe de fatigue" color='is-light' />
            <AreaChartSuivi
              dataPrev={[120, 190, 195, 196, 196, 191]}
              dataRea={[127, 195, 191, 196, 200, 210]}
              nomDataPrev="Prévisionnelle"
              nomDataRea="Réalisée"
              nomLabel="Temps"
              id="test_suivi"
              labels={["02/12/2021", "02/13/2021", "02/14/2021", "02/15/2021", "02/16/2021", "02/17/2021"]}
              date={dayjs().hour(0).minute(0).second(0)}
              color={{ stroke: { prev: "#FEFEFE", rea: "#FEFEFE" }, fill: { prev: "#0FE0FE", rea: "#E01A4F" } }}
            />
          </Card>
        </Slider>
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
      <div className="message-container">
        <MessageDanger message="Exemple d'une notification à l'attention de l'utilisateur" />
        <MessageAlerte message="Exemple d'une notification à l'attention de l'utilisateur" />
        <MessageInfo message="Exemple d'une notification à l'attention de l'utilisateur" />
        <MessageSuccess message="Exemple d'une notification à l'attention de l'utilisateur" />
      </div>
      <ContextBar location={location === '' ? 'Accueil' : location} />
    </div>
  )
}

export default App
