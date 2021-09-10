import { TitleFive, Card, BarChart, ChartAnalyseFCW } from "../../../components"

const BarChartPrincipal = (props) => {
    console.log(props)
    return (
        <div className="column">
            <Card>
                <TitleFive color="is-light" title="Analyse des zones" />
                <BarChart
                    entrainement={props.analyse}
                    id={`${props.analyse._id}${props.id}`}
                    analyse={true}
                />
            </Card>
        </div>
    )
}

const BarChartBPM = (props) => {
    return (
        <div className="column">
            <Card>
                <TitleFive color="is-light" title={props.title} />
                <ChartAnalyseFCW
                    entrainement={props.analyse}
                    id={`${props.analyse._id}BPM${props.id}`}
                    analyse={true}
                />
            </Card>
        </div>
    )
}

const BarChartWatt = (props) => {
    return (
        <div className="column">
            <Card>
                <TitleFive color="is-light" title={props.title} />
                <ChartAnalyseFCW
                    entrainement={props.analyse}
                    id={`${props.analyse._id}W${props.id}`}
                    analyse={true}
                    type="power"
                />
            </Card>
        </div>
    )
}

export { BarChartBPM, BarChartPrincipal, BarChartWatt }
