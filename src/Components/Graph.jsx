import React from 'react';
import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    LineElement
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    LineElement
);


const Graph = ({graphData}) => {
  return (
    <div>
        <Line   
            data={
                {
                    labels: graphData.map(i=>i[0]+1),
                    datasets: [
                        {
                            data: graphData.map(i=>i[1]),
                            label: 'wpm',
                            borderColor: 'gold'
                        }
                    ]
                }
            }
        />
    </div>
  )
}

export default Graph