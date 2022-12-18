import React from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale,PointElement, LineElement, ArcElement} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,ArcElement);
export const Pie = () => {
    const data={
        labels:["A","B","C","D","E","F"],
        datasets:[{
            label:"hi",
            data:[1,3,2,4,1,2],
            backgroundColor:["green","red","white,grey","yellow","violet","lightgreen"],
            boderWidth:2,
        }],}
        const option={
            borderWidth:50,
        }

  return (
    <Doughnut data={data} options={option} />
  )
}
