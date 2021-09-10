import React, { useLayoutEffect, useRef } from 'react'

import dayjs from 'dayjs'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'

/**
 *
 * @param {
 *  labels - array,
 *  id* - string,
 *  data* - array,
 *  nomLabel* - string,
 *  nomData* - string,
 *  nom* - string,
 *  color* - json{stroke (hexa), fill(hexa)}
 * } props
 * @returns
 */

const AreaChartAnalyse = (props) => {
    const chart = useRef(null)
    let time = props.time

    useLayoutEffect(() => {
        am4core.addLicense('ch-custom-attribution')
        let areachart = am4core.create(`courbe_${props.id}`, am4charts.XYChart)

        areachart.paddingRight = 20

        const seconds = 1000 * (time / props.data.length)

        // Initialisation des points
        let data = []
        for (let i = 0; i < props.data.length; i++) {
            data.push({
                [props.nomLabel]: dayjs(props.date)
                    .add(i * seconds)
                    .toDate(),
                [props.nomData]: parseInt(props.data[i]),
            })
        }
        areachart.data = data

        // Create axis unit
        let dateAxis = areachart.xAxes.push(new am4charts.DateAxis())
        dateAxis.renderer.grid.template.location = 0.5
        dateAxis.renderer.minGridDistance = 70
        dateAxis.baseInterval = {
            timeUnit: 'seconds',
            count: 1,
        }
        dateAxis.title.text = props.nomLabel
        dateAxis.title.fontWeight = 'bold'

        let valueY = areachart.yAxes.push(new am4charts.ValueAxis())
        valueY.title.text = props.nom
        valueY.title.fontWeight = 'bold'

        // Create value point
        let serie = areachart.series.push(new am4charts.LineSeries())
        serie.dataFields.valueY = `${props.nomData}`
        serie.dataFields.dateX = `${props.nomLabel}`
        serie.name = `${props.nom}`
        serie.tooltipText = `[b]{valueY} ${props.unit}[/]`
        serie.strokeWidth = 1
        serie.tensionX = 0.8
        serie.stroke = am4core.color(props.color.stroke)
        serie.fill = am4core.color(props.color.fill)
        serie.fillOpacity = 0.99

        // Hide point
        let bullet = serie.bullets.push(new am4charts.CircleBullet())
        bullet.circle.strokeWidth = 0
        bullet.circle.fillOpacity = 0

        areachart.cursor = new am4charts.XYCursor()
        chart.current = areachart

        return () => {
            areachart.dispose()
        }
    }, [
        props.color.fill,
        props.color.stroke,
        props.data,
        props.id,
        props.nomData,
        props.nomLabel,
        props.nom,
        props.date,
        props.unit,
        time
    ])
    return <div id={`courbe_${props.id}`} className="chart-area"></div>
}

export default AreaChartAnalyse
