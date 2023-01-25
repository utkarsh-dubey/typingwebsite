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
import { useTheme } from '../Context/ThemeContext';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    LineElement
);


const Graph = ({graphData, type}) => {
    const {theme} = useTheme();
  return (
    <div>
        <Line   
            data={
                {
                    labels: (type==='date')? graphData.map(i=>i[0].toDate().toLocaleString().split(',')[0]) : graphData.map(i=>i[0]+1),
                    datasets: [
                        {
                            data: graphData.map(i=>i[1]),
                            label: 'wpm',
                            borderColor: theme.title
                        }
                    ]
                }
            }
        />
    </div>
  )
}

export default Graph