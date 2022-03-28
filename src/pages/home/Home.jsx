import logo from '../../assets/logo_rectangulaire_rose.svg';
import fond1 from '../../assets/fond-1.png';
import fond2 from '../../assets/fond-2.png';
import fond3 from '../../assets/fond-3.png';
import fond4 from '../../assets/fond-4.png';
import fond1Mobile from '../../assets/fond-1-mobile.png';
import fond2Mobile from '../../assets/fond-2-mobile.png';
import fond3Mobile from '../../assets/fond-3-mobile.png';
import fond4Mobile from '../../assets/fond-4-mobile.png';
import plus from '../../assets/plus-circle.svg';
import user from '../../assets/user.svg';
import suivi from '../../assets/area-chart-alt.svg';
import objectif from '../../assets/trophy-red.svg';
import calendar from '../../assets/calendar.png';
import suiviAnalyse from '../../assets/SuiviAnalyse.png';
import { HeadingTwo } from '../../components/atoms';

const Home = () => {
  return (
    <div className='w-full bg-primary-blue-500'>
      <section id='accueil' className='relative'>
        <nav className='flex w-screen items-center z-10 px-8 py-2'>
          <img
            src={logo}
            alt='TrainPreddict, application pour cyclistes'
            className='z-50'
          />
          <ul className='grid grid-cols-5 w-5/6 2xl:ml-60 xl:ml-40 lg:ml-20 2xl:grid xl:grid lg:grid ml:hidden sm:hidden md:hidden hidden z-50'>
            <li className='z-50'>
              <a>Plan personnalisé</a>
            </li>
            <li className='z-50'>
              <a>Suivi et analyse</a>
            </li>
            <li className='z-50'>
              <a>Vos objectifs</a>
            </li>
            <li className='z-50'>
              <a>La communauté</a>
            </li>
            <li className='z-50'>
              <a>Le projet</a>
            </li>
          </ul>
        </nav>
        <div
          className='absolute z-10 top-0 left-0'
          style={{
            backgroundColor: 'rgba(0, 0, 51, 0.7)',
            width: '100vw',
            height: '80vh'
          }}
        >
          {/* PC */}
          <div className='z-10 mt-24 ml-8 2xl:grid xl:grid lg:grid ml:hidden sm:hidden md:hidden hidden'>
            <h1
              style={{
                fontFamily: 'Open Sans',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '60px',
                lineHeight: '120px'
              }}
              className='z-50'
            >
              Une application sur
              <br />
              mesure pour tous
              <br />
              les cyclistes
            </h1>
          </div>
          <a
            href='/auth'
            className='flex bg-high-contrast-500 h-20 items-center 2xl:flex xl:flex lg:flex ml:hidden sm:hidden md:hidden hidden'
            style={{
              width: '350px',
              marginLeft: 'calc(100vw - 350px)',
              fontSize: '35px'
            }}
          >
            <img
              src={plus}
              width={30}
              alt='Register application pour cyclistes et plus'
              className='ml-6 mr-4'
            />
            Rejoignez-nous
          </a>
          <a
            href='/auth'
            style={{
              width: '180px',
              marginLeft: 'calc(100vw - 185px)',
              fontSize: '20px'
            }}
            className='2xl:grid xl:grid lg:grid ml:hidden sm:hidden md:hidden hidden'
          >
            Connectez-vous
          </a>
          {/* Mobile */}
          <div className='z-10 mt-40 ml-8 2xl:hidden xl:hidden lg:hidden ml:grid sm:grid md:grid grid'>
            <h1
              style={{
                fontFamily: 'Open Sans',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '35px',
                lineHeight: '60px'
              }}
              className='z-50'
            >
              Une application sur
              <br />
              mesure pour tous
              <br />
              les cyclistes
            </h1>
          </div>
          <a
            href='/auth'
            className='flex bg-high-contrast-500 h-20 items-center 2xl:hidden xl:hidden lg:hidden ml:flex sm:flex md:flex mt-36'
            style={{
              width: '350px',
              marginLeft: 'calc(100vw - 350px)',
              fontSize: '30px'
            }}
          >
            <img
              src={plus}
              width={30}
              alt='Register application pour cyclistes et plus'
              className='ml-6 mr-4'
            />
            Rejoignez-nous
          </a>
          <a
            href='/auth'
            style={{
              width: '180px',
              marginLeft: 'calc(100vw - 185px)',
              fontSize: '20px'
            }}
            className='2xl:hidden xl:hidden lg:hidden ml:grid sm:grid md:grid grid'
          >
            Connectez-vous
          </a>
        </div>
        <div className='z-0' style={{ height: '70vh' }}>
          <img
            src={fond1}
            alt='Cyclistes jour de courses'
            className='absolute left-0 right-0 top-0 z-0 w-screen sm:hidden md:inline-block ml:inline-block 2xl:inline-block xl::inline-block lg:inline-block'
            style={{ height: '80vh' }}
          />
          <img
            src={fond1Mobile}
            alt='Cyclistes jour de courses'
            className='absolute left-0 right-0 top-0 z-0 w-screen sm:inline-block md:hidden ml:hidden 2xl:hidden xl::hidden lg:hidden'
            style={{ height: '80vh' }}
          />
        </div>
        <div className='px-8 my-4 flex justify-around 2xl:flex-row xl:flex-row lg:flex-row ml:flex-col sm:flex-col md:flex-col flex-col'>
          <div className='mb-4 mx-2 bg-component-two-500 2xl:w-3/4 xl:w-3/4 lg:w-3/4 ml:w-full sm:w-full md:w-full h-36 text-center items-center flex justify-center flex-col rounded'>
            <img
              src={user}
              alt="Plan d'entrainement personnalisé de trainpreddict, application pour cyclistes"
            />
            <HeadingTwo color='text-high-contrast-500'>
              Plan personnalisé
            </HeadingTwo>
          </div>
          <div className='mb-4 mx-2 bg-component-two-500 2xl:w-3/4 xl:w-3/4 lg:w-3/4 ml:w-full sm:w-full md:w-full h-36 text-center items-center flex justify-center flex-col rounded'>
            <img
              src={suivi}
              alt='Courbe de suivi de trainpreddict, application pour cyclistes'
            />
            <HeadingTwo color='text-high-contrast-500'>
              Suivi & Analyse
            </HeadingTwo>
          </div>
          <div className='mb-4 mx-2 bg-component-two-500 2xl:w-3/4 xl:w-3/4 lg:w-3/4 ml:w-full sm:w-full md:w-full h-36 text-center items-center flex justify-center flex-col rounded'>
            <img
              src={objectif}
              alt='Atteindre ses objectifs avec trainpreddict, application pour cyclistes'
            />
            <HeadingTwo color='text-high-contrast-500'>
              Vos objectifs
            </HeadingTwo>
          </div>
        </div>
      </section>
      <section id='plan-personnalise'>
        <div className='relative'>
          <div className='absolute w-screen'>
            {/* PC */}
            <div className='z-10 mt-24 ml-8 2xl:grid xl:grid lg:grid ml:hidden sm:hidden md:hidden hidden'>
              <h1
                style={{
                  fontFamily: 'Open Sans',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '60px',
                  lineHeight: '120px'
                }}
                className='z-50'
              >
                Plan d'entrainement
                <br />
                100% personnalisé
              </h1>
            </div>
            <img
              src={calendar}
              alt='Plan personnalisé pour cycliste par TrainPreddict'
              className='2xl:grid xl:grid lg:grid ml:hidden sm:hidden md:hidden hidden'
              style={{
                position: 'absolute',
                width: '30vw',
                right: '0',
                top: '11vw'
              }}
            />

            {/* Mobile */}
            <div className='z-10 mt-10 ml-8 2xl:hidden xl:hidden lg:hidden ml:grid sm:grid md:grid grid'>
              <h1
                style={{
                  fontFamily: 'Open Sans',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '35px',
                  lineHeight: '60px'
                }}
                className='z-50'
              >
                Une application sur
                <br />
                mesure pour tous
                <br />
                les cyclistes
              </h1>
            </div>
            <img
              src={calendar}
              alt='Plan personnalisé pour cycliste par TrainPreddict'
              className='2xl:hidden xl:hidden lg:hidden ml:grid sm:grid md:grid grid'
              style={{
                position: 'absolute',
                height: '70vw',
                left: 'calc(50vw - (0.75 * 35vw))',
                top: '40vw'
              }}
            />
          </div>
          <img
            src={fond2}
            alt='Cyclistes jour de courses'
            className='w-screen sm:hidden md:inline-block ml:inline-block 2xl:inline-block xl:inline-block lg:inline-block hidden'
          />
          <img
            src={fond2Mobile}
            alt='Cyclistes jour de courses'
            className='w-screen sm:inline-block md:hidden ml:hidden 2xl:hidden xl::hidden lg:hidden'
          />
        </div>
        <div className='grid justify-center px-8'>
          <div
            className='sm:inline-block md:hidden ml:hidden 2xl:hidden xl::hidden lg:hidden'
            style={{ marginTop: '40px' }}
          ></div>
          <p
            style={{
              fontFamily: 'Open Sans',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '30px',
              lineHeight: '41px',
              display: 'flex',
              alignItems: 'center',
              color: '#FBBDCE',
              marginTop: '80px'
            }}
          >
            Votre profil, votre emploie du temps, votre plan sur mesure.
          </p>
          <p
            style={{
              fontSize: '27px',
              maxWidth: '900px',
              marginTop: '40px',
              marginBottom: '80px'
            }}
          >
            Chaque cyclistes est différents, pour pouvoir s’adapter à vous,
            notre application récolte les données sur votre profil et votre
            emploie du temps. Ensuite les données sont compilés pour vous
            générer un plan d’entrainement 100% personnalisé.
          </p>
        </div>
      </section>
      <section
        id='plan-personnalise'
        className='bg-component-two-500 px-8 py-2'
      >
        {/* PC */}
        <div className='z-10 mt-10 ml-8 2xl:grid xl:grid lg:grid ml:hidden sm:hidden md:hidden hidden'>
          <h1
            style={{
              fontFamily: 'Open Sans',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '60px',
              lineHeight: '120px',
              marginTop: '10px'
            }}
            className='z-50'
          >
            Suivi & Analyse
          </h1>
        </div>
        {/* Mobile */}
        <div className='z-10 mt-10 2xl:hidden xl:hidden lg:hidden ml:grid sm:grid md:grid grid'>
          <h1
            style={{
              fontFamily: 'Open Sans',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '35px',
              lineHeight: '60px'
            }}
            className='z-50'
          >
            Suivi & Analyse
          </h1>
        </div>
        <div className='grid justify-center'>
          <p
            style={{
              fontFamily: 'Open Sans',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '30px',
              lineHeight: '41px',
              display: 'flex',
              alignItems: 'center',
              color: '#FBBDCE',
              marginTop: '80px',
              maxWidth: '900px'
            }}
          >
            Parce que nous savons que les entrainements ne se passe jamais comme
            prévu
          </p>
          <p
            style={{
              fontSize: '27px',
              maxWidth: '900px',
              marginTop: '40px',
              marginBottom: '80px'
            }}
          >
            L’application est faites spécialement pour s’adapter aux imprévu et
            vous proposer un suivi 100% personnalisé. Grâce à nos analyses, nous
            pouvons adapter votre plan d’entrainement au fur et à mesure pour
            que celui-ci reste le plus efficace possible.
          </p>
        </div>
      </section>
      <section id='objectifs'>
        <div className='relative'>
          <div className='absolute w-screen'>
            {/* PC */}
            <div className='z-10 mt-24 ml-8 2xl:grid xl:grid lg:hidden ml:hidden sm:hidden md:hidden hidden'>
              <h1
                style={{
                  fontFamily: 'Open Sans',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '60px',
                  lineHeight: '120px'
                }}
                className='z-50'
              >
                Atteignez 100% de
                <br />
                votre potentiel
              </h1>
            </div>
            <img
              src={suiviAnalyse}
              alt='Plan personnalisé pour cycliste par TrainPreddict'
              className='2xl:grid xl:grid lg:grid ml:hidden sm:hidden md:hidden hidden'
              style={{
                position: 'absolute',
                width: '25vw',
                right: '0',
                top: '28vw'
              }}
            />

            {/* Mobile */}
            <div className='z-10 mt-10 ml-8 2xl:hidden xl:hidden lg:grid ml:grid sm:grid md:grid grid'>
              <h1
                style={{
                  fontFamily: 'Open Sans',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '35px',
                  lineHeight: '60px'
                }}
                className='z-50'
              >
                Atteignez 100% de
                <br />
                votre potentiel
              </h1>
            </div>
            <img
              src={suiviAnalyse}
              alt='Plan personnalisé pour cycliste par TrainPreddict'
              className='2xl:hidden xl:hidden lg:hidden ml:grid sm:grid md:grid grid'
              style={{
                position: 'absolute',
                height: '50vw',
                left: 'calc(50vw - 35vw))',
                top: '50vw'
              }}
            />
          </div>
          <img
            src={fond3}
            alt='Cyclistes jour de courses'
            className='w-screen sm:hidden md:hidden ml:hidden 2xl:inline-block xl:inline-block lg:inline-block hidden'
          />
          <img
            src={fond3Mobile}
            alt='Cyclistes jour de courses'
            className='w-screen sm:inline-block md:inline-block ml:inline-block 2xl:hidden xl::hidden lg:hidden'
          />
        </div>
        <div className='grid justify-center px-8'>
          <div
            className='sm:inline-block md:hidden ml:hidden 2xl:hidden xl::hidden lg:hidden'
            style={{ marginTop: '40px' }}
          ></div>
          <p
            style={{
              fontFamily: 'Open Sans',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '30px',
              lineHeight: '41px',
              display: 'flex',
              alignItems: 'center',
              color: '#FBBDCE',
              marginTop: '80px'
            }}
          >
            Vous avez le potentiel d’atteindre vos objectifs.
          </p>
          <p
            style={{
              fontSize: '27px',
              maxWidth: '900px',
              marginTop: '40px',
              marginBottom: '80px'
            }}
          >
            Pour que vous ayez toutes les chances d’atteindre vos objectifs,
            nous nous adoptons à votre rythme et au rythme de vous imprévu. Vous
            allez arrivé à 100% le jour de vos objectifs.
          </p>
        </div>
      </section>
      <section
        id='plan-personnalise'
        className='bg-component-two-500 px-8 py-2 relative'
      >
        {/* PC */}
        <div className='z-10 mt-10 ml-8 2xl:grid xl:grid lg:grid ml:hidden sm:hidden md:hidden hidden'>
          <h1
            style={{
              fontFamily: 'Open Sans',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '60px',
              lineHeight: '120px',
              marginTop: '10px'
            }}
            className='z-50'
          >
            Une application faites
            <br />
            par les cyclistes
          </h1>
        </div>
        <div className='absolute top-40'>
          <a
            href='https://forms.gle/HeF6KSbSw8Aag4Kv8'
            className='flex bg-high-contrast-500 h-20 items-center 2xl:flex xl:flex lg:flex ml:flex sm:hidden md:hidden hidden'
            style={{
              width: '350px',
              marginLeft: 'calc(100vw - 350px)',
              fontSize: '20px'
            }}
          >
            <span className='ml-8'>Répondre au questionnaire</span>
          </a>
        </div>
        {/* Mobile */}
        <div className='z-10 mt-10 2xl:hidden xl:hidden lg:hidden ml:grid sm:grid md:grid grid'>
          <h1
            style={{
              fontFamily: 'Open Sans',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '35px',
              lineHeight: '60px'
            }}
            className='z-50'
          >
            Une application faites
            <br />
            par les cyclistes
          </h1>
        </div>
        <div className='grid justify-center'>
          <p
            style={{
              fontFamily: 'Open Sans',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '30px',
              lineHeight: '41px',
              display: 'flex',
              alignItems: 'center',
              color: '#FBBDCE',
              marginTop: '80px',
              maxWidth: '900px'
            }}
          >
            Nous avons besoins de vous.
          </p>
          <p
            style={{
              fontSize: '27px',
              maxWidth: '900px',
              marginTop: '40px',
              marginBottom: '80px'
            }}
          >
            Dans l’optique d’atteindre notre objectif de rendre l’application à
            votre image nous avons besoin de vous. Notre projet est fait pour
            les cyclistes et par cyclistes, nous avons besoin de votre aide tant
            par vos retours d’utilisation de l’application que par vos envies.
            C’est pour cela que nous avons mis à votre disposition un
            <a href='https://forms.gle/HeF6KSbSw8Aag4Kv8'>questionnaire</a>.
          </p>
        </div>
        <a
          href='/auth'
          className='flex bg-high-contrast-500 h-20 items-center 2xl:hidden xl:hidden lg:hidden ml:hidden sm:flex md:flex flex'
          style={{
            width: '350px',
            marginLeft: 'calc(100vw - 350px)',
            fontSize: '20px',
            marginBottom: '40px'
          }}
        >
          <span className='ml-8'>Répondre au questionnaire</span>
        </a>
      </section>
      <section id='coachs'>
        <div className='relative'>
          <div className='absolute w-screen'>
            {/* PC */}
            <div className='z-10 mt-24 ml-8 2xl:grid xl:grid lg:hidden ml:hidden sm:hidden md:hidden hidden'>
              <h1
                style={{
                  fontFamily: 'Open Sans',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '60px',
                  lineHeight: '120px'
                }}
                className='z-50'
              >
                Pour les coachs &
                <br />
                les clubs
              </h1>
            </div>
            <a
              href='/auth'
              className='flex bg-high-contrast-500 h-20 items-center 2xl:grid xl:grid lg:grid ml:hidden sm:hidden md:hidden hidden'
              style={{
                width: '350px',
                position: 'absolute',
                right: '0',
                top: '28vw',
                fontSize: '35px'
              }}
            >
              <span className='ml-8'>En savoir plus</span>
            </a>

            {/* Mobile */}
            <div className='z-10 mt-10 ml-8 2xl:hidden xl:hidden lg:grid ml:grid sm:grid md:grid grid'>
              <h1
                style={{
                  fontFamily: 'Open Sans',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '35px',
                  lineHeight: '60px'
                }}
                className='z-50'
              >
                Pour les coachs &
                <br />
                les clubs
              </h1>
            </div>
            <a
              href='/auth'
              className='flex bg-high-contrast-500 h-20 items-center 2xl:hidden xl:hidden lg:hidden ml:grid sm:grid md:grid grid'
              style={{
                width: '350px',
                position: 'absolute',
                right: '0',
                top: '50vw',
                fontSize: '35px'
              }}
            >
              <span className='ml-8'>En savoir plus</span>
            </a>
          </div>
          <img
            src={fond4}
            alt='Cyclistes jour de courses'
            className='w-screen sm:hidden md:hidden ml:hidden 2xl:inline-block xl:inline-block lg:inline-block hidden'
          />
          <img
            src={fond4Mobile}
            alt='Cyclistes jour de courses'
            className='w-screen sm:inline-block md:inline-block ml:inline-block 2xl:hidden xl::hidden lg:hidden'
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
