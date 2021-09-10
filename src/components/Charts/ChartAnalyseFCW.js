import React, { Fragment } from 'react'
import {
    zone_1,
    zone_2,
    zone_3,
    zone_4,
    zone_5,
    zone_6,
    zone_7,
} from '../../theme'

/* Conversion du temps hh:mm:ss en secondes */
const timeToSeconds = (time) => {
    // Convertisseurs HH:MM:SS => seconds
    const split = time.split(':')
    const hours = parseInt(split[0] * 3600)
    const minutes = parseInt(split[1] * 60)
    const secs = parseInt(split[2])

    return hours + minutes + secs
}

/* Conversion de secondes vers hh:mm */
const secondsToTime = (seconde) => {
    let hours = Math.floor(seconde / 3600)
    let minutes = Math.floor(seconde / 60) % 60
    let seconds = seconde % 60
    return (
        `${hours > 9 ? hours : `0${hours}`}` +
        `:${minutes > 9 ? minutes : `0${minutes}`}` +
        `:${seconds < 9 ? '00' : `30`}`
    )
}

const ChartAnalyseFCW = (props) => {
    /* Récupération des infos du parent */
    let entrainement = props.entrainement
    let width = props.width
        ? props.width
        : props.analyse
        ? window.innerWidth < 780
            ? window.innerWidth / 1.5
            : window.innerWidth / 2.7
        : 250
    let height = 0.4 * width
    let backgrounds = [zone_1, zone_2, zone_3, zone_4, zone_5, zone_6, zone_7]
    let colors = ['--oxford-blue', '--pink']
    let graduation = {
        size: Math.floor(props.analyse ? width / 4.5 : width / 4.2),
        time: parseInt(timeToSeconds(entrainement.duree) / 4),
    }

    let blocs = []
    let left = 0
    let labels = []
    let before_rep = 0
    let total = 0

    if (props.type === 'power') {
        entrainement.n30_power.forEach((repetition, index) => {
            /* Initialisation des valeurs du bloc */
            const repetition_height = (height / 7) * Math.floor(repetition)
            const repetition_width =
                (width / (entrainement.n30_power.length * 30)) * (index + 1)
            const background = backgrounds[Math.floor(repetition) - 1]
            const color = parseInt(repetition) < 5 ? colors[0] : colors[1]

            blocs.push({
                id: `bloc${index}`,
                height: repetition_height,
                width: repetition_width,
                left: left,
                background: background,
                color: color,
            })

            if (parseInt(repetition) === before_rep) {
                total += 30
            } else if (index !== 0) {
                labels.push([
                    index * 30,
                    `Z${
                        before_rep !== labels[index - 1]
                            ? before_rep
                            : repetition
                    }: ${secondsToTime(total)}`,
                ])
                before_rep = Math.floor(repetition)
                total = 30
            } else {
                before_rep = Math.floor(repetition)
                total += 30
            }

            left += repetition_width
        })
    } else {
        entrainement.n30_fc.forEach((repetition, index) => {
            /* Initialisation des valeurs du bloc */
            const repetition_height = (height / 7) * Math.floor(repetition)
            const repetition_width =
                (width / (entrainement.n30_fc.length * 30)) * (index + 1)
            const background = backgrounds[Math.floor(repetition) - 1]
            const color = parseInt(repetition) < 5 ? colors[0] : colors[1]

            blocs.push({
                id: `bloc${index}`,
                height: repetition_height,
                width: repetition_width,
                left: left,
                background: background,
                color: color,
            })

            if (parseInt(repetition) === before_rep) {
                total += 30
            } else if (index !== 0) {
                labels.push([
                    index * 30,
                    `Z${
                        before_rep !== labels[index - 1]
                            ? before_rep
                            : repetition
                    }: ${secondsToTime(total)}`,
                ])
                before_rep = Math.floor(repetition)
                total = 30
            } else {
                before_rep = Math.floor(repetition)
                total += 30
            }

            left += repetition_width
        })
    }

    return (
        <div
            className={`graphique ${props.analyse ? 'analyse' : ''}`}
            id={`graphique-zone`}
            style={{ height: height + 25, width: width + 25 }}
        >
            <div className="graduation-vertical">
                <div
                    className="graduation"
                    style={
                        props.analyse
                            ? { width: width * 1.1 }
                            : { width: width * 1.15 }
                    }
                >
                    <span></span>
                    Z1
                </div>
                <div className="graduation">
                    <span></span>
                    Z2
                </div>
                <div className="graduation">
                    <span></span>
                    Z3
                </div>
                <div className="graduation">
                    <span></span>
                    Z4
                </div>
                <div className="graduation">
                    <span></span>
                    Z5
                </div>
                <div className="graduation">
                    <span></span>
                    Z6
                </div>
                <div
                    className="graduation"
                    style={{ left: graduation.size * 4 }}
                >
                    <span></span>
                    Z7
                </div>
            </div>
            <div className="graphique-zone" style={{ height: height }}>
                {blocs.map((item, i) => {
                    return (
                        <Fragment>
                            <span
                                className="graphique-tooltip"
                                id={`${item.id}-${props.id}`}
                                style={{
                                    background: item.background,
                                    color: `var(${item.color})`,
                                }}
                            >
                                {labels.map((subitem, j) => {
                                    if (
                                        i * 30 <= labels[j][0] &&
                                        i * 30 > labels[j !== 0 ? j - 1 : 0][0]
                                    ) {
                                        return labels[j][1]
                                    } else {
                                        return ''
                                    }
                                })}
                            </span>
                            <div
                                className="bloc"
                                id={`${item.id}-${props.id}`}
                                style={{
                                    height: item.height,
                                    width: item.width,
                                    left: item.left,
                                    background: item.background,
                                }}
                                onMouseEnter={(e) => {
                                    const tooltip = document.getElementById(
                                        e.target.id
                                    )
                                    tooltip.style.opacity = '1'
                                }}
                                onMouseLeave={(e) => {
                                    const tooltip = document.getElementById(
                                        e.target.id
                                    )
                                    tooltip.style.opacity = 0
                                }}
                            ></div>
                        </Fragment>
                    )
                })}
            </div>
            <div
                className="graduation-horizontal"
                style={
                    props.analyse
                        ? { width: width * 0.95 }
                        : { width: width * 1.15 }
                }
            >
                <div
                    className="graduation"
                    style={{ left: graduation.size * 0, width: 'fit-content' }}
                >
                    <span></span>
                    {secondsToTime(graduation.time * 0)}
                </div>
                <div
                    className="graduation"
                    style={{ left: graduation.size * 1, width: 'fit-content' }}
                >
                    <span></span>
                    {secondsToTime(graduation.time * 1)}
                </div>
                <div
                    className="graduation"
                    style={{ left: graduation.size * 2, width: 'fit-content' }}
                >
                    <span></span>
                    {secondsToTime(graduation.time * 2)}
                </div>
                <div
                    className="graduation"
                    style={{ left: graduation.size * 3, width: 'fit-content' }}
                >
                    <span></span>
                    {secondsToTime(graduation.time * 3)}
                </div>
                <div
                    className="graduation"
                    style={{ left: graduation.size * 4, width: 'fit-content' }}
                >
                    <span></span>
                    {secondsToTime(graduation.time * 4)}
                </div>
            </div>
        </div>
    )
}

export default ChartAnalyseFCW
