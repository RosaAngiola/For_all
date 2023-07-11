import MainLayout from "@layouts/MainLayout";
import ButtonFoot from '@atoms/ButtonFoot';
import CardBalance from '@atoms/CardBalance';

// ho installato npn di chartjs per react, importando alcune funzioni  di chartjs, di una libreria che crea falsi dati, ho costruito il grafico.
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
  // import faker from 'faker';
  import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';
  


export default function Home(){
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
      
      const options = {
        responsive: true,
        maintainAspectRatio: false, 
        plugins: {
          legend: {
            position: 'top' ,
          },
          title: {
            display: true,
            text: 'Price BTC and USD',
          },
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
       const data = {
        labels,
        datasets: [
          {
            label: 'USD',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 153, 0)',
            backgroundColor: 'rgba(255, 153, 0, 0.5)',
          },
          {
            label: 'BTC',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 200, 0)',
            backgroundColor: 'rgba(255, 200, 0, 0.5)',
          },
        ],
      };
    
    return(
        <MainLayout  >
            <CardBalance/>
            <div className="box-content flex flex-col items-center p-2 my-8 mx-8 shadow-lg h-72 lg:max-w-[800px] lg:mx-auto">
            
                <Line options={options} data={data} />
              
            </div>

            <div className="flex justify-center mt-14">
                <ButtonFoot className = 'rounded-2xl' to = '/market/buy' title = 'Buy'/>
                <ButtonFoot className = 'rounded-2xl' to = '/market/sell' title = 'Sell'/>
            </div>

        </MainLayout>
    )
}