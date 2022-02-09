import '../style/rej.css'
import {useState}from'react'
import profile from'../image/user.png'
export default function Rej(props) {
  let [data,setData]=useState({})
  let flw=()=>{
let uri=`http://10.152.68.112:8080/set/following`
let got=localStorage.getItem('token')

fetch(uri,
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "post",
body: JSON.stringify({token:got,id:props.id})
})
.then(function(res){return res.json() })
.then((res)=>{setData(res);})
.catch(function(res){ console.log(res) })

  }
  return(
    <div className='rej'>
<img src={profile} className='rejimg'/>
    <p className='rejun'>{props.username}</p>
  <button className='rejbtn'
  onClick={flw}>follow</button>
       <p className='rejf'>{props.follow.length}</p> 
    

    </div>
    )
}