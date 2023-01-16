import React from 'react'
import Graph from './Graph'

const Stats = ({wpm, accuracy, graphData, correctChars, incorrectChars, extraChars, missedChars}) => {

    var timeSet = new Set();

    const newGraph = graphData.filter((i)=>{
        if(!timeSet.has(i[0])){
            timeSet.add(i[0]);
            return true;
        }
    });

  return (
    <div className="stats-comp">
        <div className="left">
            <div className="title">WPM</div>
            <div className="subtitle">{wpm}</div>
            <div className="title">Accuracy</div>
            <div className="subtitle">{accuracy}%</div>
            <div className="title">Characters</div>
            <div className="subtitle">{correctChars}/{incorrectChars}/{extraChars}/{missedChars}</div>
        </div>

        <div className="right">
            {/* graph will come here */}
            <Graph graphData={newGraph}/>
        </div>
    </div>
  )
}

export default Stats