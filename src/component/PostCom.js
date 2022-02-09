import '../style/PostCom.css'
import {useState}from'react'
import { useNavigate } from "react-router-dom";
export default function PostCom(){
  let history=useNavigate()
  let [dec,setDec]=useState('')
  let [imgStr,setImgStr]=useState('')
  let [load,setLoad]=useState(false)
  let img=(e)=>{
  let imgData=e.target.files[0]
  let render=new FileReader()
  render.readAsDataURL(imgData)
  render.onload=()=>{
setImgStr(render.result) 
  }
  };
  
  //
  let post=()=>{
 let uri=`http://10.152.68.112:8080/post/post`
    let got=localStorage.getItem('token')

fetch(uri,
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "post",
    body: JSON.stringify({
      token:got,
      dec:dec,img:imgStr
    })
})
.then(function(res){return res.json() })
.then((res)=>{console.log(res);
  history('/')
})
.catch(function(res){ console.log(res) })
setLoad(true)
  }
  return(
   <div className='PostCom'> 
{
 load?<div className='load'></div>:
    <center>
<textarea  className='ta' 
onChange={(e)=>{setDec(e.target.value)}}/>
<input type='file' className='file' 
 accept="image/*" onChange={img}/>
<br/>
<button className='btn' onClick={post}>Post</button>
</center>
}
    </div>
    )
}

/*

*/