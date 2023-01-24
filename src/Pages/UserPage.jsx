import React, { useEffect } from 'react'
import { auth, db } from '../firebaseConfig'

const UserPage = () => {

  const fetchData = ()=>{
    //fetching data from firestore
    const ref = db.collection('Results');
    const {uid} = auth.currentUser;
    ref.where('userID', '==', uid).get().then((snapshot)=>{
      console.log(snapshot);
      snapshot.docs.map((doc)=>{
        console.log("data",doc.data());
      })
    }).catch((err)=>{
      console.log("not able to fetch data");
    });
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div>UserPage</div>
  )
}

export default UserPage