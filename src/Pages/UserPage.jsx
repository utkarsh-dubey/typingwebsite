import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebaseConfig'
import ResultTable from '../Components/ResultTable';
import Graph from '../Components/Graph';
import UserCard from '../Components/UserCard';

const UserPage = () => {

  const [data, setData] = useState([]);
  const [graphData, setGraphData] = useState([]);

  const fetchData = ()=>{
    //fetching data from firestore
    const ref = db.collection('Results');
    const {uid} = auth.currentUser;
    let temp = [];
    let graphTemp = [];
    ref.where('userID', '==', uid).get().then((snapshot)=>{
      snapshot.docs.map((doc)=>{
        temp.push(doc.data());
        graphTemp.push([doc.data().timestamp, doc.data().wpm]);
      });
      setData(temp);
      setGraphData(graphTemp);
    }).catch((err)=>{
      console.log("not able to fetch data",err);
    });
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className='canvas'>
      <UserCard totalTests={data.length}/>
      <div className='userpage-graph'>
        <Graph graphData={graphData} type='date' />
      </div>
      <div className="resulttable">
        <ResultTable data={data}/>
      </div> 
    </div>
  )
}

export default UserPage