import React from "react"
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js"

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

interface ChartProps {
  type: "bar" | "line" | "pie" | "doughnut"
  data: any
  options?: ChartOptions<any>
  className?: string
  height?: number
  width?: number
}

export function Chart({
  type,
  data,
  options,
  className,
  height,
  width,
}: ChartProps) {
  const chartOptions: ChartOptions<any> = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
      },
    },
    ...options,
  }

  const renderChart = () => {
    switch (type) {
      case "bar":
        return <Bar data={data} options={chartOptions} height={height} width={width} />
      case "line":
        return <Line data={data} options={chartOptions} height={height} width={width} />
      case "pie":
        return <Pie data={data} options={chartOptions} height={height} width={width} />
      case "doughnut":
        return <Doughnut data={data} options={chartOptions} height={height} width={width} />
      default:
        return <div>Invalid chart type</div>
    }
  }

  return (
    <div className={className}>
      {renderChart()}
    </div>
  )
}

Chart.displayName = "Chart"