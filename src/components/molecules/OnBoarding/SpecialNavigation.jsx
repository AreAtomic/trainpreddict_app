import { useContext } from 'react'
import OnBoardingContext from '../../../contexts/onboardingContext'
import { Bottom } from '../Navigation'

const SpecialNavigation = () => {
    const onBoardingContext = useContext(OnBoardingContext)
    
    return <Bottom onboarding={true} step={onBoardingContext.step} />
}

export default SpecialNavigation
