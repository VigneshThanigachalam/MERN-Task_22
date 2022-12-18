import React from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale,PointElement, LineElement, Filler } from 'chart.js';
import {Line} from 'react-chartjs-2';
ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Filler);
export const LineA = () => {
    const data={
        labels:["A","B","C","D","E","F"],
        datasets:[{
            label:"hi",
            data:[1,3,2,4,1,2],
            fill:true,
            backgroundColor:"lightblue",
            pointBackgroundColor:"blue",
            lineTension:0.5,
            borderWidth:2,
            borderColor:"#4e73df",
        }],}

       const option={
        title:{
          display:true
        },
          scales:{
            y: {
              // max: 5,
              // min: 1,
              ticks: {
                  stepSize: 1,
              }
          }
          }
        
    }
  return (
    <Line data={data} options={option}/>
  )
}
