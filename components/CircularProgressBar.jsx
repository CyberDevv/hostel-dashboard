import { useState } from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const OverallGraph = ({ points, name }) => {
  const [state] = useState({
    options: {
      chart: {},
      stroke: {
        lineCap: 'round',
      },
      series: [26, 74],
      colors: ['#03B575', '#FAC032'],
      legend: {
        show: true,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 20,
            size: '65%',
          },
          dataLabels: {
            total: {
              show: true,
              label: 'TOTAL',
            },
          },
        },
      },
      labels: ['New Tenants', 'Old Tenants'],
    },
  })

  return (
    <div className="mixed-chart border-2">
      <Chart
        options={state.options}
        series={state.options.series}
        type="radialBar"
        // height={400}
      />
    </div>
  )
}

export default OverallGraph
