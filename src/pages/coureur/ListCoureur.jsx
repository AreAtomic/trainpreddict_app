import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TableCoureur } from '../../components/atoms'
import * as services from '../../services'
import * as middlewares from '../../middlewares'

const ListCoureur = () => {
    //API States
    const auth = useSelector((state) => state.auth)
    const users = useSelector((state) => state.userList)
    const dispatch = useDispatch()

    //Pages state
    const [loadingUser, setLoadingUser] = useState(true)

    useEffect(() => {
        services.getAllUsers(auth.token).then((response) => {
            dispatch(middlewares.setUserList(response.data)).then(
                setLoadingUser(false)
            )
        })
    }, [])
    return (
        <div className="pt-6 pl-10">
            {!loadingUser ? (
                <TableCoureur
                    className="animate-[fadeIn-1s-linear]"
                    coureur={users}
                />
            ) : (
                <div class="max-w-sm w-full">
                    <div class="animate-pulse flex space-x-1">
                        <div class="flex-1 space-y-1 py-1">
                            <div class="h-20 bg-component-two-200"></div>
                            <div class="grid grid-cols-3 gap-1">
                                <div class="h-8 bg-component-two-200"></div>
                                <div class="h-8 bg-component-two-200"></div>
                                <div class="h-8 bg-component-two-200"></div>
                            </div>
                            <div class="grid grid-cols-3 gap-1">
                                <div class="h-8 bg-component-two-200"></div>
                                <div class="h-8 bg-component-two-200"></div>
                                <div class="h-8 bg-component-two-200"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ListCoureur
