import analyze from '../../../assets/analyze.svg'
import calendar from '../../../assets/calendar.svg'
import courbes from '../../../assets/courbes.svg'
import trophy from '../../../assets/trophy.svg'
import user from '../../../assets/user.svg'

//TODO: Remplacer les liens avec les liens d'action rapide
const Navbar = ({ onboarding, step }) => {
    return (
        <div
            className={`fixed bottom-0 left-0 w-full sm:flex md:flex justify-between px-4 py-4 bg-primary-blue-500 z-0 ${
                onboarding
                    ? 'lg:flex xl:flex 2xl:flex'
                    : 'lg:hidden xl:hidden 2xl:hidden'
            }`}
        >
            <div className="flex flex-row justify-between w-full z-0">
                <a
                    className={`w-full flex justify-around ${
                        onboarding && (step === 3 ? 'active' : 'opacity-30')
                    }`}
                    href="/plan"
                >
                    <img src={calendar} width={24} />
                </a>
                <a
                    className={`w-full flex justify-around ${
                        onboarding && (step === 2 ? 'active' : 'opacity-30')
                    }`}
                    href="/objectif"
                >
                    <img src={trophy} width={24} />
                </a>
                <a
                    className={`w-full flex justify-around ${
                        onboarding && (step === 4 ? 'active' : 'opacity-30')
                    }`}
                    href="/seances"
                >
                    <img src={analyze} width={24} />
                </a>
                <a
                    className={`w-full flex justify-around ${
                        onboarding && (step === 5 ? 'active' : 'opacity-30')
                    }`}
                    href="/courbes"
                >
                    <img src={courbes} width={24} />
                </a>
                <a
                    className={`w-full flex justify-around ${
                        onboarding &&
                        (step === 1
                            ? 'border-2 border-high-contrast-500 rounded-full p-2'
                            : 'inactive')
                    }`}
                    href="/parametres"
                >
                    <img src={user} width={24} />
                </a>
            </div>
        </div>
    )
}

export default Navbar
