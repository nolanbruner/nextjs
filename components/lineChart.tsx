import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const mock= [{"date":"2023-02-09T15:59:00.000Z","ticker":"AAPL","data":{"open":150.84,"high":150.94,"low":150.78,"close":150.93,"volume":22539,"is_extended_hours":false}},{"date":"2023-02-09T15:58:00.000Z","ticker":"AAPL","data":{"open":150.84,"high":150.92,"low":150.79,"close":150.84,"volume":18225,"is_extended_hours":false}},{"date":"2023-02-09T15:57:00.000Z","ticker":"AAPL","data":{"open":150.96,"high":151.01,"low":150.81,"close":150.84,"volume":6930,"is_extended_hours":false}},{"date":"2023-02-09T15:56:00.000Z","ticker":"AAPL","data":{"open":150.93,"high":151.1,"low":150.91,"close":151,"volume":5696,"is_extended_hours":false}},{"date":"2023-02-09T15:55:00.000Z","ticker":"AAPL","data":{"open":151.25,"high":151.25,"low":150.91,"close":150.97,"volume":10783,"is_extended_hours":false}},{"date":"2023-02-09T15:54:00.000Z","ticker":"AAPL","data":{"open":151.34,"high":151.47,"low":151.32,"close":151.33,"volume":5205,"is_extended_hours":false}}]
export function options(a){
  return {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: a||"Label",
      },
    },
  }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = (props: { a?: string }) => {
  return {
    labels,
    datasets: [
      {
        label: props.a,
        data: labels.map(() => Math.random() * 100),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => Math.random() * 100),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }
};

// export const Graph = () => {
//   return (
//     <Line options={options} data={data("Day")} />
//   )
// }
