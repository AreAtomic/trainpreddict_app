import { TitleFive, DoghnutsAnalyse } from '../../../components'

const DoghnutWatt = (props) => {
    return (
        <div className="column">
            <TitleFive
                title="Répartition des zones de puissance"
                color="is-light"
            />
            <DoghnutsAnalyse
                type="Watt"
                Z1={props.analyse.power_zone[0]}
                Z2={props.analyse.power_zone[1]}
                Z3={props.analyse.power_zone[2]}
                Z4={props.analyse.power_zone[3]}
                Z5={props.analyse.power_zone[4]}
                Z6={props.analyse.power_zone[5]}
                Z7={props.analyse.power_zone[6]}
                moyenne={props.analyse.normalized_power}
                id={`watt${props.id}`}
            />
        </div>
    )
}

const DoghnutBPM = (props) => {
    return (
        <div className="column">
            <TitleFive
                title="Répartition des zones de fréquence cardiaque"
                color="is-light"
            />
            <DoghnutsAnalyse
                type="BPM"
                Z1={props.analyse.zone_fc[0]}
                Z2={props.analyse.zone_fc[1]}
                Z3={props.analyse.zone_fc[2]}
                Z4={props.analyse.zone_fc[3]}
                Z5={props.analyse.zone_fc[4]}
                moyenne={props.analyse.fc_moy}
                id={`BPM${props.id}`}
            />
        </div>
    )
}

export {DoghnutBPM, DoghnutWatt}
