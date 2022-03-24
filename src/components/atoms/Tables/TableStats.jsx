import dropdown from '../../../assets/ico-tab-dropdown.svg'
import dayjs from 'dayjs'

const TableCoureur = (props) => {
    return (
        <table className="mt-1 table-auto font-['Nunito'] text-low-contrast-500">
            <thead className="bg-component-two-500 font-bold">
                <td className="px-3 py-3 border-2 border-medium-contrast-500 relative">
                    {
                        // TODO: adapt to change the selected week in parent component
                    }
                    <select
                        onChange={(e) => {
                            props.onChange(
                                parseInt(e.target.value.split(' ')[1])
                            )
                        }}
                        className="dropdown-select bg-component-two-500 w-full"
                    >
                        {props.weeks.map((item, i) => {
                            return (
                                <option
                                    value={`Semaine ${i + 1} - ${props.year}`}
                                    selected={i === props.selected_week}
                                >{`Semaine ${i + 1} - ${props.year}`}</option>
                            )
                        })}
                    </select>
                    <img
                        src={dropdown}
                        alt="dropdown select, TrainPreddict application pour cycliste"
                        className="absolute right-5 top-3"
                    />
                </td>
                <td className="px-3 py-3 border-2 border-medium-contrast-500">
                    Temps d'entrainement
                </td>
                <td className="px-3 py-3 border-2 border-medium-contrast-500">
                    Score de stress
                </td>
                <td className="px-3 py-3 border-2 border-medium-contrast-500">
                    Distance
                </td>
                <td className="px-3 py-3 border-2 border-medium-contrast-500">
                    Dénivelé
                </td>
            </thead>
            <tbody>
                <tr className="bg-primary-blue-500">
                    <td className="px-3 py-3 border-2 border-medium-contrast-500">
                        Prévisionnel
                    </td>
                    <td className="px-3 py-3 border-2 border-medium-contrast-500">
                        {props.weeks[props.selected_week]?.planned.temps}
                    </td>
                    <td className="px-3 py-3 border-2 border-medium-contrast-500">
                        {props.weeks[props.selected_week]?.planned.sse}
                    </td>
                    <td className="px-3 py-3 border-2 border-medium-contrast-500">
                        {props.weeks[props.selected_week]?.planned.distance}
                    </td>
                    <td className="px-3 py-3 border-2 border-medium-contrast-500">
                        {props.weeks[props.selected_week]?.planned.denivele}
                    </td>
                </tr>
                <tr className="bg-component-two-500">
                    <td className="px-3 py-3 border-2 border-medium-contrast-500">
                        Réalisé
                    </td>
                    <td className="px-3 py-3 border-2 border-medium-contrast-500">
                        {props.weeks[props.selected_week]?.done.temps}
                    </td>
                    <td className="px-3 py-3 border-2 border-medium-contrast-500">
                        {props.weeks[props.selected_week]?.done.sse}
                    </td>
                    <td className="px-3 py-3 border-2 border-medium-contrast-500">
                        {props.weeks[props.selected_week]?.done.distance}
                    </td>
                    <td className="px-3 py-3 border-2 border-medium-contrast-500">
                        {props.weeks[props.selected_week]?.done.denivele}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableCoureur
