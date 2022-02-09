import {useState,useEffect}from'react'
import Rej from'../component/Roj'
export default function Follow() {
  let [data,setData]=useState([])
  let got=localStorage.getItem('userid')
  let uri=`http://10.152.68.112:8080/user/get/all/follow/${got}`

  useEffect(()=>{
  fetch(uri).then((res)=>{return res.json()}).then((res)=>{setData(res)})  
  },[])
  return(
  <div>  
    <center>
    {
      data.map((e)=>{
        return <Rej key={e._id} username={e.username}
        follow={e.follow} userid={e._id}/>
      })
    }
    </center>
   </div> 
    );
}