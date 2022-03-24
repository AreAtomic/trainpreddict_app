import Chart from 'react-apexcharts'

const Doghnut = (props) => {
    const options = {
        chart: {
            id: 'indicateurs',
            background: 'transparent',
            foreColor: '#fff'
        },
        colors: [
            '#FDEDF1',
            '#F6B9C9',
            '#EF84A0',
            '#EC6A8C',
            '#E84F78',
            '#D22555',
            '#6E0D25',
        ],
        fill: {
            colors: [
                '#FDEDF1',
                '#F6B9C9',
                '#EF84A0',
                '#EC6A8C',
                '#E84F78',
                '#D22555',
                '#6E0D25',
            ],
        },
        dataLabels: {
            style: {
                colors: [
                    '#473c3f',
                    '#473c3f',
                    '#FDEDF1',
                    '#FDEDF1',
                    '#FDEDF1',
                    '#FDEDF1',
                    '#FDEDF1',
                ],
            },
        },
        grid: {
            show: false,
        },
        labels: ['Z1', 'Z2', 'Z3', 'Z4', 'Z5', 'Z6', 'Z7'],
    }
    const series = [...props.zones]
    const label = ['Z1', 'Z2', 'Z3', 'Z4', 'Z5', 'Z6', 'Z7']
    return (
        <div className="text-component-two-500">
            <Chart
                options={options}
                series={series}
                label={label}
                type="donut"
                width={350}
            />
        </div>
    )
}

export default Doghnut
