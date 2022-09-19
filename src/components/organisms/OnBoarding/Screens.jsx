import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { ButtonPrimary, HeadingThree, HeadingTwo } from '../../atoms'
import { OnBoardingModal } from '../../atoms/Modal'
import OnBoardingContext from '../../../contexts/onboardingContext'
import { useEffect } from 'react'
import { SpecialNavigation } from '../../molecules'
import arrow from '../../../assets/dropdown-arrow.svg'
import { ProfilForm } from '../Form'

const Screens = () => {
    const onBoardingContext = useContext(OnBoardingContext)
    const location = useLocation().pathname.split('/')[1]

    useEffect(() => {
        console.log(onBoardingContext)
    }, [onBoardingContext])

    return (
        <OnBoardingModal>
            {onBoardingContext.step === 0 && (
                <>
                    <HeadingTwo className="text-center">Bienvenue</HeadingTwo>
                    <HeadingThree className="mt-20">
                        Tu fais tes premier pas sur{' '}
                        <i>TrainPreddict Compagnon</i> 🚴
                    </HeadingThree>
                    <ButtonPrimary
                        className="mt-20 mx-auto"
                        onClick={() => {
                            onBoardingContext.handleSetStep(1)
                        }}
                    >
                        Continuer
                    </ButtonPrimary>
                </>
            )}
            {onBoardingContext.step === 1 && (
                <>
                    <HeadingTwo className="text-center">Etape 1</HeadingTwo>
                    {onBoardingContext.step === 1 &&
                    location !== 'parametres' ? (
                        <>
                            <HeadingThree className="mt-20">
                                Commence par paramétrer ton profil pour générer
                                ton premier plan !
                            </HeadingThree>
                            <SpecialNavigation />
                        </>
                    ) : (
                        <div className="mt-10 bg-component-one-500 w-full px-4 border-2 border-high-contrast-500 rounded-sm">
                            {onBoardingContext.innerStep === 'menu' ? (
                                <div
                                    className="max-w-xs cursor-pointer"
                                    onClick={() => {
                                        onBoardingContext.handleInnerStep(
                                            'form'
                                        )
                                    }}
                                >
                                    <HeadingTwo className="flex flex-row justify-between items-baseline py-4">
                                        Sportif{' '}
                                        <img
                                            src={arrow}
                                            alt="Arrow"
                                            className="rotate-270"
                                        />
                                    </HeadingTwo>
                                </div>
                            ) : (
                                <div className="max-w-xs">
                                    <ProfilForm />
                                </div>
                            )}
                        </div>
                    )}
                </>
            )}
        </OnBoardingModal>
    )
}

export default Screens
