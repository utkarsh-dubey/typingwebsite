import React from 'react'
import Graph from './Graph'
import { auth, db } from '../firebaseConfig';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const Stats = ({wpm, accuracy, graphData, correctChars, incorrectChars, extraChars, missedChars}) => {

    var timeSet = new Set();

    const newGraph = graphData.filter((i)=>{
        if(!timeSet.has(i[0])){
            timeSet.add(i[0]);
            return true;
        }
    });

    const pushDataToDb = ()=>{
        const ref = db.collection('Results');
        const {uid} = auth.currentUser;
        ref.add({
            wpm: wpm,
            accuracy: accuracy,
            characters: `${correctChars}/${incorrectChars}/${extraChars}/${missedChars}`,
            timestamp: new Date(),
            userID: uid
        }).then((res)=>{
    
            toast('result saved to db', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }).catch((err)=>{
            toast('not able to save result to db', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        });
    }

    useEffect(()=>{
        if(auth.currentUser){
            pushDataToDb();
        }
        else{
            toast('login to save results', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }  
    },[])



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