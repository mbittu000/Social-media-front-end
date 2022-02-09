import Timeline from'../component/MainTime'
import {useState,useEffect} from'react'
export default function Home(){
  let [data,setData]=useState([])
  let [load,setLoad]=useState(true)
  let uri=`http://10.152.68.112:8080/post/get/timeline`
  useEffect(()=>{
 async function call() {
let got=localStorage.getItem('token')

fetch(uri,
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "post",
    body: JSON.stringify({token:got})
})
.then(function(res){return res.json() })
.then((res)=>{setData(res);setLoad(false)})
.catch(function(res){ console.log(res) })

   }
   call()
  },[])
  console.log(data)
  return(
   <>
   
   {load?<div className='load'></div>:
   data.map((e,i)=>{
     return <Timeline data={e} key={i}/>
   })
     

   }

    </>
    )
}



/*
    let fc=await fetch(uri, {
   method: 'get',
   headers: {'Content-Type':'application/json'},
   body: {
    "token": localStorage.getItem('token')
   }
  })
  let js=await fc.json()
  
  
  
  
  body:JSON.stringify({
    title:title,
    note:note
    })
  */