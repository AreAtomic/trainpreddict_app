import Chart from 'react-apexcharts'

const CourbesFC = (props) => {
    console.log(props.time)
    const options = {
        chart: {
            id: 'indicateurs',
            background: '#000033',
            toolbar: {
                show: true,
                offsetX: 0,
                offsetY: 0,
                tools: {
                    download: true,
                    zoom: `<img src="https://i.postimg.cc/RVfVDng5/ico-search.png" />`,
                    zoomin: `<img src="https://i.postimg.cc/D0py3qtn/plus-circle.png" />`,
                    zoomout: `<img src="https://i.postimg.cc/sXVVB6z3/moins-circle.png" />`,
                    pan: `<img src="https://i.postimg.cc/ry1PZV5Z/expand.png"/>`,
                    reset: `<img src="https://i.postimg.cc/wvc7ZRqj/ico-home.png"/>`,
                    customIcons: [],
                },
            },
        },
        xaxis: {
            categories: props.time,
            tickAmount: 10
        },
        colors: ['#E01A4F'],
        fill: {
            colors: ['#E01A4F'],
        },
        grid: {
            show: false,
        },
        theme: { mode: 'dark' },
        dataLabels: {enabled: false}
    }
    const series = [
        {
            name: 'Fréquence cardiaque (BPM)',
            data: props.fc,
        },
    ]

    return <Chart id="fc" options={options} series={series} type="area" height={350} />
}

export default CourbesFC
