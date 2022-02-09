import '../style/rej.css'
import {useState}from'react'
import profile from'../image/user.png';
import { useNavigate } from "react-router-dom";
export default function Roj(props) {
  let [data,setData]=useState({})
  let history=useNavigate()
    let view=()=>{
  localStorage.setItem('userid',props.userid)
history('/ViewProfile')
  }
  return(
    <div className='rej' 
    onClick={view}>
<img src={profile} className='rejimg'/>
    <p className='rejun'>{props.username}</p>

    

    </div>
    )
}