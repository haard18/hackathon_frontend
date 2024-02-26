import React from 'react'
import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
    ChartOptions,
    Colors,
    RadialLinearScale,
    Filler
    } from 'chart.js';


    ChartJS.register(
        CategoryScale,
        Colors,
        Filler,
        LinearScale,
        PointElement,
        RadialLinearScale,
        LineElement,
        TimeScale,
        Title,
        Tooltip,
        Legend,
       );

const Graph = () => {
    const RadarData = {
        labels: ["Total Orders", "Active Orders", "Currently in transit", "Completed"],
        datasets: [
          {
            label: "Data2",
            fill:true,
            borderColor: "rgb(255, 99, 132)",
            pointBackgroundColor: "rgb(255, 99, 132)",
            poingBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(255, 99, 132)",
            data: [43, 23, 55, 43],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
          },{
            label: 'Data2',
            data: [28, 48, 40, 19],
            fill: true,
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            borderColor: 'rgb(0,  , 0)',
            pointBackgroundColor: 'rgb(0, 0, 0)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
          }
        ]
      };
       

      const RadarOptions = {
        // scale: {
        //   ticks: {
        //     min: 0,
        //     max: 16,
        //     stepSize: 2,
        //     showLabelBackdrop: false,
        //     backdropColor: "rgba(203, 197, 11, 1)"
        //   },
        //   angleLines: {
        //     color: "rgba(255, 255, 255, .3)",
        //     lineWidth: 1
        //   },
        //   gridLines: {
        //     color: "rgba(255, 255, 255, .3)",
        //     circular: true
        //   }
        // },
        scales: {
            
        r: {
            angleLines: {
                display: false
            },
            suggestedMin: 50,
            suggestedMax: 100
        }
    }
      };
      


  return (
    <div className="artboard flex justify-center border artboard-horizontal phone-4">
        <Radar
        data = {RadarData}
        options={RadarOptions}
        
        />
    </div>
  )
}

export default Graph