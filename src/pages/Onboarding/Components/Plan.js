import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
    PlanAction,
    OnBoardingAction,
    CourbesAction,
} from '../../../middlewares/actions'
import sprinter from '../../../assets/sprinter.svg'

const Plan = () => {
    const [left, setleft] = useState(true)
    const dispatch = useDispatch()
    setTimeout(function () {
        setleft(!left)
    }, 500)

    const [genplan, setgenplan] = useState(true)
    const plan = useSelector((state) => state.plan)
    if (genplan) {
        dispatch(PlanAction.postPlan())
            .then(
                dispatch(CourbesAction.postCourbesPrevisionnelle())
                    .then(dispatch(CourbesAction.postCourbesRealise()))
                    .catch((err) => console.log(err))
            )
            .catch((err) => console.log(err))
        setgenplan(false)
    }

    if (plan !== '') {
        const user = JSON.parse(localStorage.getItem('user'))
        const newuser = {
            nom: user.nom,
            prenom: user.prenom,
            token: user.token,
            firstLogged: false,
        }
        localStorage.setItem('user', JSON.stringify(newuser))
        localStorage.removeItem('onboarding')
        dispatch(OnBoardingAction.clearOnBoarding())
        window.location.reload()
    }
    return (
        <div className="form">
            <img
                src={sprinter}
                alt="Sprinter en action, TrainPreddict application pour cycliste"
                className={`sprinter ${left ? 'left' : ''}`}
            />
        </div>
    )
}

export default Plan
