import React, { useLayoutEffect, useRef } from 'react'

import dayjs from 'dayjs'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'

/**
 * 
 * @param {
 *  labels* - array,
 *  id* - string,
 *  dataPrev* - array,
 *  dataRea* - array, 
 *  nomLabel* - string,
 *  nomDataPrev* - string,
 *  nomDataRea* - string,
 *  nom* - string,
 *  color* - json{stroke : {rea, prev:(hexa)}, fill: {rea, prev:(hexa)}}
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
        for (let i = 0; i < props.dataPrev.length; i++) {
            data.push({
                [props.nomLabel]: dayjs(props.labels[i]).toDate(),
                [props.nomDataPrev]: props.dataPrev[i],
                [props.nomDataRea]: props.dataRea[i],
            })
        }
        areachart.data = data

        // Create axis unit
        let dateAxis = areachart.xAxes.push(new am4charts.DateAxis())
        dateAxis.renderer.grid.template.location = 0.5
        dateAxis.renderer.minGridDistance = 50
        dateAxis.baseInterval = {
            timeUnit: 'day',
            count: 1,
        }

        let valueY = areachart.yAxes.push(new am4charts.ValueAxis())

        // Create value point
        let serie = areachart.series.push(new am4charts.LineSeries())
        serie.dataFields.valueY = `${props.nomDataPrev}`
        serie.dataFields.dateX = `${props.nomLabel}`
        serie.name = "Prévisionnelle"
        serie.tooltipText = '[b]{valueY} point[/]'
        serie.strokeWidth = 1
        serie.tensionX = 0.8
        serie.stroke = am4core.color(props.color.stroke.prev)
        serie.fill = am4core.color(props.color.fill.prev)
        serie.fillOpacity = 0.6

        let serie2 = areachart.series.push(new am4charts.LineSeries())
        serie2.dataFields.valueY = `${props.nomDataRea}`
        serie2.dataFields.dateX = `${props.nomLabel}`
        serie2.name = "Réalisée"
        serie2.tooltipText = '[b]{valueY} point[/]'
        serie2.strokeWidth = 1
        serie2.tensionX = 0.8
        serie2.stroke = am4core.color(props.color.stroke.rea)
        serie2.fill = am4core.color(props.color.fill.rea)
        serie2.fillOpacity = 0.6

        // Hide point
        let bullet = serie.bullets.push(new am4charts.CircleBullet())
        bullet.circle.strokeWidth = 0
        bullet.circle.fillOpacity = 0

        areachart.cursor = new am4charts.XYCursor()
        areachart.legend = new am4charts.Legend()
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