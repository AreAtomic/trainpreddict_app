import Chart from 'react-apexcharts'

const CourbesIndicateurs = (props) => {
    const options = {
        marker:{
            size: [0,0]
        },
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
            categories: props.dates,
        },
        colors: ['#E01A4F', '#FFE5F6'],
        fill: {
            colors: ['#E01A4F', '#FFE5F6'],
        },
        grid: {
            show: false,
        },
        theme: { mode: 'dark' },
    }
    const series = [
        {
            name: 'fatigue',
            data: props.tiredness,
        },
        {
            name: 'forme',
            data: props.form,
        },
    ]

    return (
        <Chart
            options={options}
            series={series}
            type="area"
            height={350}
        />
    )
}

export default CourbesIndicateurs
