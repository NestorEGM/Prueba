import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import { getData } from '../helpers/dataHelpers';
import '../style/Chart.css';

const Chart = () => {

  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);
  const initData = () => {
    const res = getData();
    let labels = [];
    let data = [];
    Object.keys(res).forEach(key => {
      labels.push(res[key].Dia);
      data.push(res[key].monto_revolvencia);
    });
    setLabels(labels);
    setData(data);
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <div className="chart-wrapper">
      <Bar
        options={{
          legend: {
            display: false
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                }
              }
            ]
          },
          tooltips: {
            enabled: false,
          },
          plugins: {
            datalabels: {
              display: true,
              anchor: 'end',
              color: '#fff',
              backgroundColor: ['#02e815', '#02e815', '#02e815', '#02e815', '#02e815', '#02e815', '#e8cb02', '#e8cb02', '#e8cb02', '#e8cb02', '#e8cb02', '#e8cb02', '#e82c02', '#e82c02', '#e82c02', '#e82c02'],
            }
          }
        }}
        data={{
          labels,
          datasets: [
            {
              backgroundColor: ['#02e815', '#02e815', '#02e815', '#02e815', '#02e815', '#02e815', '#e8cb02', '#e8cb02', '#e8cb02', '#e8cb02', '#e8cb02', '#e8cb02', '#e82c02', '#e82c02', '#e82c02', '#e82c02'],
              data,
            },
          ]
        }}
      />
    </div>
  );
};

export default Chart;