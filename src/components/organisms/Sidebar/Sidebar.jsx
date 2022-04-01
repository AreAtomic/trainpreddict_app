//Components
import { ButtonSecondary, HeadingFour } from '../../atoms'
//Images
import { ListSeance } from '..'
import * as middlewares from '../../../middlewares'
import { useDispatch } from 'react-redux'

const Sidebar = (props) => {
    const dispatch = useDispatch()

    return (
        <div className="bg-component-one-500 z-50 left-0 top-navbar w-80 border-r border-low-contrast-500 h-sidebar fixed overflow-y-scroll no-scrollbar">
            <div className="grid py-6 border-b border-low-contrast-500">
                <div className="flex justify-center">
                    <div className="h-80 w-circle-name px-6 py-6 bg-medium-contrast-500 rounded-full text-2xl font-bold">
                        {props.prenom[0]}
                        {props.nom[0]}
                    </div>
                </div>
                <HeadingFour className="text-center">
                    {props.prenom} {props.nom}
                </HeadingFour>
            </div>
            <div className="h-2/3 overflow-y-scroll scrollbar overflow-x-none">
                <ListSeance seances={props.seances} />
            </div>
        </div>
    )
}

export default Sidebar
