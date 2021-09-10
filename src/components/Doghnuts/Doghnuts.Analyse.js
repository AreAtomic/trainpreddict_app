import React, { useLayoutEffect, useRef } from 'react'

import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import {
    zone_1,
    zone_2,
    zone_3,
    zone_4,
    zone_5,
    zone_6,
    zone_7,
} from '../../theme'

const DoghnutsAnalyse = (props) => {
    const doghnut = useRef(null)
    const text = props.moyenne + props.type
    const total =
        props.type === 'BPM'
            ? props.Z1 + props.Z2 + props.Z3 + props.Z4 + props.Z5
            : props.Z1 +
              props.Z2 +
              props.Z3 +
              props.Z4 +
              props.Z5 +
              props.Z6 +
              props.Z7

    useLayoutEffect(() => {
        am4core.addLicense('ch-custom-attribution')
        am4core.color('#fff')
        let chart = am4core.create(`doughnut-${props.id}`, am4charts.PieChart)
        console.log(chart)
        if (props.type === 'Watt') {
            chart.data = [
                {
                    zone: 'Z1',
                    temps:
                        (100 * Math.round((props.Z1 / total) * 10000)) / 10000,
                    color: zone_1,
                },
                {
                    zone: 'Z2',
                    temps:
                        (100 * Math.round((props.Z2 / total) * 10000)) / 10000,
                    color: zone_2,
                },
                {
                    zone: 'Z3',
                    temps:
                        (100 * Math.round((props.Z3 / total) * 10000)) / 10000,
                    color: zone_3,
                },
                {
                    zone: 'Z4',
                    temps:
                        (100 * Math.round((props.Z4 / total) * 10000)) / 10000,
                    color: zone_4,
                },
                {
                    zone: 'Z5',
                    temps:
                        (100 * Math.round((props.Z5 / total) * 10000)) / 10000,
                    color: zone_5,
                },
                {
                    zone: 'Z6',
                    temps:
                        (100 * Math.round((props.Z6 / total) * 10000)) / 10000,
                    color: zone_6,
                },
                {
                    zone: 'Z7',
                    temps:
                        (100 * Math.round((props.Z7 / total) * 10000)) / 10000,
                    color: zone_7,
                },
            ]
        } else {
            chart.data = [
                {
                    zone: 'Z1',
                    temps:
                        (100 * Math.round((props.Z1 / total) * 10000)) / 10000,
                    color: zone_1,
                },
                {
                    zone: 'Z2',
                    temps:
                        (100 * Math.round((props.Z2 / total) * 10000)) / 10000,
                    color: zone_2,
                },
                {
                    zone: 'Z3',
                    temps:
                        (100 * Math.round((props.Z3 / total) * 10000)) / 10000,
                    color: zone_3,
                },
                {
                    zone: 'Z4',
                    temps:
                        (100 * Math.round((props.Z4 / total) * 10000)) / 10000,
                    color: zone_4,
                },
                {
                    zone: 'Z5',
                    temps:
                        (100 * Math.round((props.Z5 / total) * 10000)) / 10000,
                    color: zone_5,
                },
            ]
        }
        // Add label
        chart.innerRadius = 90
        var label = chart.seriesContainer.createChild(am4core.Label)
        label.text = text
        label.horizontalCenter = 'middle'
        label.verticalCenter = 'middle'
        label.fontSize = 30
        label.fill = '#eddfef'

        // Add and configure Series
        var pieSeries = chart.series.push(new am4charts.PieSeries())
        pieSeries.dataFields.value = 'temps'
        pieSeries.dataFields.category = 'zone'
        pieSeries.slices.template.propertyFields.fill = 'color'
        pieSeries.slices.template.propertyFields.color = 'color'
        pieSeries.labels.template.disabled = true
        pieSeries.ticks.template.disabled = true

        chart.legend = new am4charts.Legend()

        doghnut.current = chart

        return () => {
            chart.dispose()
        }
    }, [
        props.Z1,
        props.Z2,
        props.Z3,
        props.Z4,
        props.Z5,
        props.Z6,
        props.Z7,
        props.id,
        props.type,
        text,
        total,
    ])
    return <div id={`doughnut-${props.id}`} className="doughnut-div"></div>
}

export default DoghnutsAnalyse
