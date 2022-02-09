import '../style/register.css'
import { useNavigate } from "react-router-dom";
import {useState}from'react'
export default function Register(props){
  let [name,setName]=useState('')
  let [username,setUsername]=useState('')
  let [password,setPassword]=useState('')
  let [email,setEmail]=useState('')
  let [gender,setGender]=useState('')
  let history=useNavigate()
  let go=()=>{
    history('/')
  }
  //Register
  
  let lg=()=>{
    let uri='http://10.152.68.112:8080/user/register'
    let obj={username:username,
      password:password,
      email:email,
      gender:gender,
      name:name
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
 console.log(res)
})
.catch(function(res){ console.log(res) })

  }
  return(
   <> 
   <center>
   <div className='rlog'>
   <input type='text' className='n'
   placeholder='name'
   onChange={(e)=>{
   setName(e.target.value);
   }}/>
   <br/>
      <input type='text' className='run'
   placeholder='username'
   onChange={(e)=>{
   setUsername(e.target.value);
   }}/>
   <br/>
  <input type='password' className='rps' placeholder='password'
  onChange={(e)=>{
   setPassword(e.target.value);
   }}/>
      <br/>
   <input type='email' className='el' placeholder='abc@xyz.com'
   onChange={(e)=>{
   setEmail(e.target.value);
   }}/>
   <br/>

<label for="gender" className='lb'>Gender</label>
<select name="gender" className='sl'
onChange={(e)=>{
   setGender(e.target.value);
   console.log(e.target.value)
   }}>
	<option value="none" selected>Gender</option>
	<option value="male">Male</option>
	<option value="female">Female</option>
</select>

<br/>
   <button className='lg'
   onClick={lg}>Sign Up</button>
      <p className='ca' onClick={go}>
   login</p>
   </div>
   </center>
    </>
    )
}

/*
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
 console.log(res)
})
.catch(function(res){ console.log(res) })
*/