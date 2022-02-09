import '../style/login.css'
import { useNavigate } from "react-router-dom";
import {useState}from'react'
export default function Home(props){
  let history=useNavigate()
  let [username,setUsername]=useState('')
  let [password,setPassword]=useState('')
  let [fth,seFth]=useState({})
  let go=()=>{
    history('/register')
  }
  
  let lg=()=>{
    let uri='http://10.152.68.112:8080/user/login'
    let obj={username:username,
      password:password
    }
    fetch(uri,
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "post",
    body: JSON.stringify(obj)
})
.then(function(res){return res.json() })
.then((res)=>{
 localStorage.setItem('token',res.token);
 props.dot(res);
 history('/Profile')
})
.catch(function(res){ console.log(res) })

  }
  return(
   <> 
   <center>
   <div className='log'>
   <input type='text' className='un'
   placeholder='username'
   onChange={(e)=>{
   setUsername(e.target.value);
   }}/>
   <br/>
   <input type='password' className='ps'
   placeholder='password' 
   onChange={(e)=>{
   setPassword(e.target.value);
   }}/>
   <p className='ca' onClick={go}>Create an account</p>
   <button className='lg' onClick={lg}>login</button>
   </div>
   </center>
    </>
    )
}
