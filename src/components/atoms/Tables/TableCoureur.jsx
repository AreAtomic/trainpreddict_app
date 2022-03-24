import { useDispatch } from 'react-redux'
import * as middlewares from '../../../middlewares'

const TableCoureur = (props) => {
    const dispatch = useDispatch()
    return (
        <table className="mt-1 table-auto font-['Nunito'] text-low-contrast-500">
            <thead className="bg-component-two-500 font-bold">
                <td className="px-3 py-3 border-2 border-medium-contrast-500">
                    Nom Prénom
                </td>
                <td className="px-3 py-3 border-2 border-medium-contrast-500">
                    Catégorie
                </td>
                <td className="px-3 py-3 border-2 border-medium-contrast-500">
                    Prochain objectif
                </td>
            </thead>
            <tbody>
                {props.coureur.map((item, i) => {
                    return (
                        <tr
                            className={`${
                                i % 2 === 0
                                    ? 'bg-primary-blue-500'
                                    : 'bg-component-two-500'
                            } cursor-pointer`}
                            onClick={() => {
                                dispatch(
                                    middlewares.setUserSelected(
                                        `${item.nom} ${item.prenom}`,
                                        item._id
                                    )
                                )
                            }}
                        >
                            <td className="px-3 py-3 border-2 border-medium-contrast-500">
                                {item.nom} {item.prenom}
                            </td>
                            <td className="px-3 py-3 border-2 border-medium-contrast-500">
                                {item.categorie}
                            </td>
                            <td className="px-3 py-3 border-2 border-medium-contrast-500">
                                {item.next_objectif.date}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default TableCoureur
