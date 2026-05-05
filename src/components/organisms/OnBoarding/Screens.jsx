import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { ButtonPrimary, HeadingThree, HeadingTwo } from '../../atoms'
import { OnBoardingModal } from '../../atoms/Modal'
import { OnBoardingContext } from '../../../contexts/onboardingContext'
import { useEffect } from 'react'
import { SpecialNavigation } from '../../molecules'
import arrow from '../../../assets/dropdown-arrow.svg'
import { ObjectifForm, ProfilForm } from '../Form'
import { Plan } from '../../../pages'

const Screens = (props) => {
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
                    <HeadingThree className="mx-2 mt-20">
                        Tu fais tes premier pas sur{' '}
                        <i>TrainPreddict Compagnon</i> 🚴
                    </HeadingThree>
                    <ButtonPrimary
                        className="mx-auto mt-20"
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
                            <HeadingThree className="mx-2 mt-20">
                                Commence par paramétrer ton profil pour générer
                                ton premier plan !
                            </HeadingThree>
                            <SpecialNavigation />
                        </>
                    ) : (
                        <div className="w-full px-4 mt-10 border-2 rounded-sm bg-component-one-500 border-high-contrast-500">
                            {onBoardingContext.innerStep === 'menu' ? (
                                <div
                                    className="max-w-xs cursor-pointer"
                                    onClick={() => {
                                        onBoardingContext.handleInnerStep(
                                            'form'
                                        )
                                    }}
                                >
                                    <HeadingTwo className="flex flex-row items-baseline justify-between py-4">
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
                                    <ProfilForm toast={props.toast} />
                                </div>
                            )}
                        </div>
                    )}
                </>
            )}
            {onBoardingContext.step === 2 && (
                <>
                    <HeadingTwo className="text-center">Etape 2</HeadingTwo>
                    {onBoardingContext.step === 2 && location !== 'objectif' ? (
                        <>
                            <HeadingThree className="mx-2 mt-20">
                                Maintenant tu dois rentrer un objectif pour
                                lequel tu veux t'entrainer
                            </HeadingThree>
                            <SpecialNavigation />
                        </>
                    ) : (
                        <div className="w-full px-4 mt-10 border-2 rounded-sm bg-component-one-500 border-high-contrast-500">
                            <div className="fit-content">
                                <ObjectifForm toast={props.toast} />
                            </div>
                        </div>
                    )}
                </>
            )}
            {onBoardingContext.step === 3 && (
                <>
                    <HeadingTwo className="text-center">
                        {onBoardingContext.innerStep !== 'end'
                            ? 'Etape 3'
                            : 'Félicitation'}
                    </HeadingTwo>
                    {location !== 'plan' ? (
                        <>
                            <HeadingThree className="mx-2 mt-20">
                                Tu peux maintenant générer ton plan
                                d'entrainement
                            </HeadingThree>
                            <SpecialNavigation />
                        </>
                    ) : onBoardingContext.innerStep !== 'end' ? (
                        <div className="w-full mt-10 overflow-x-scroll border-2 rounded-sm bg-component-one-500 border-high-contrast-500 scrollbar">
                            <div className="fit-content">
                                <Plan toast={props.toast} />
                            </div>
                        </div>
                    ) : (
                        <>
                            <HeadingThree className="mx-2 mt-20">
                                Tu peux désormais profiter de toutes les
                                fonctionnalités
                            </HeadingThree>
                            <ButtonPrimary
                                className="mx-auto mt-20"
                                onClick={() => {
                                    onBoardingContext.handleInnerStep('')
                                    onBoardingContext.handleSetComplete(true)
                                }}
                            >
                                Terminer
                            </ButtonPrimary>
                        </>
                    )}
                </>
            )}
        </OnBoardingModal>
    )
}

export default Screens
