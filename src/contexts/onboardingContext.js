import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { requestApi } from '../api'

const OnBoardingContext = React.createContext({
    step: 0,
    complete: false,
    fetched: false,
    innerStep: 'menu',
    handleSetStep: (step) => {},
    handleSetComplete: (value) => {},
    handleInnerStep: (innerStep) => {},
})

export default function OnBoardingContextProvider({ children }) {
    const auth = useSelector((state) => state.auth)
    const [step, setStep] = useState(0)
    const [complete, setComplete] = useState(false)
    const [fetched, setFetched] = useState(false)
    const [innerStep, setInnerStep] = useState('menu')

    useEffect(() => {
        if (auth.token) {
            requestApi(
                'get',
                'coureur/profil/onboarding',
                auth.token,
                null
            ).then((response) => {
                if (step <= response.onboarding.step) {
                    setStep(response.onboarding.step)
                    setComplete(response.onboarding.complete)

                    localStorage.setItem(
                        'onboarding',
                        JSON.stringify(response.onboarding)
                    )
                }
                setFetched(true)
            })
        }
    }, [auth])

    return (
        <OnBoardingContext.Provider
            value={{
                step: step,
                complete: complete,
                fetched: fetched,
                innerStep: innerStep,
                handleSetStep: (step) => {
                    requestApi('put', 'coureur/profil/onboarding', auth.token, {
                        onboarding: { step: step, complete: complete },
                    })
                        .then((response) => {
                            setStep(response.onboarding.step)
                        })
                        .catch((error) => alert('An error occured'))
                },
                handleSetComplete: (value) => {
                    setComplete(value)
                    requestApi('put', 'coureur/profil/onboarding', auth.token, {
                        onboarding: { step: 4, complete: value },
                    })
                        .then((response) => {
                            setStep(response.onboarding.step)
                            setComplete(response.onboarding.complete)
                        })
                        .catch((error) => alert('An error occured'))
                },
                handleInnerStep: (innerStep) => setInnerStep(innerStep),
            }}
        >
            {children}
        </OnBoardingContext.Provider>
    )
}

export { OnBoardingContext }
