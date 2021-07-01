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

    useLayoutEffect(() => {
        am4core.addLicense("ch-custom-attribution")
        let areachart = am4core.create(`courbe_${props.id}`, am4charts.XYChart)

        areachart.paddingRight = 20

        // Initialisation des points
        let data = []
        for (let i = 0; i < props.data.length; i++) {
            data.push({
                [props.nomLabel]: dayjs(props.date).add(i * 1000).toDate(),
                [props.nomData]: props.data[i],
            })
        }
        areachart.data = data

        // Create axis unit
        let dateAxis = areachart.xAxes.push(new am4charts.DateAxis())
        dateAxis.renderer.grid.template.location = 0.5
        dateAxis.renderer.minGridDistance = 70
        dateAxis.baseInterval = {
            timeUnit: 'second',
            count: 1,
        }

        let valueY = areachart.yAxes.push(new am4charts.ValueAxis())

        // Create value point
        let serie = areachart.series.push(new am4charts.LineSeries())
        serie.dataFields.valueY = `${props.nomData}`
        serie.dataFields.dateX = `${props.nomLabel}`
        serie.name = `${props.nom}`
        serie.tooltipText = '[b]{valueY} point[/]'
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
    }, [])
    return <div
        id={`courbe_${props.id}`}
        className="chart-area"
    ></div>
}

export default AreaChartAnalyse