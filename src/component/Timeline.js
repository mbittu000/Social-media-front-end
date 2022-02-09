import '../style/timeline.css'
import Hr from'../image/solzino.jpeg'
import love from'../image/heart.png'
import comm from'../image/comment.png'
import {useState,useEffect} from'react'
import {useNavigate } from"react-router-dom";
export default function Timeline(props){
  let history=useNavigate()
  let [data,setData]=useState([])
  let [use,setUse]=useState([])
  let uri=`http://10.152.68.112:8080/user/get/${props.userid}`
  useEffect(()=>{
    
    fetch(uri)
.then(function(res){return res.json() })
.then((res)=>{setData(res)})
.catch(function(res){ console.log(res) })

  },[uri])
  console.log(data)
  
  let like=()=>{
let url=`http://10.152.68.112:8080/set/like`
  let got=localStorage.getItem('token')
  fetch(url,
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "post",
    body: JSON.stringify({token:got,
    post:props.id})
})
.then(function(res){return res.json() })
.then((res)=>{setUse(res)})
.catch(function(res){ console.log(res) })  
  }
  
  let view=()=>{
  localStorage.setItem('userid',props.userid)
history('/ViewProfile')
  }
  return(
    <>
   <div className='timeline'>
   <center>
   <div className='tbr'>
   <div className='tmainpro' onClick={view}>
    <img src={data.image?data.image:Hr} className='tpro'/>
    <p className='tname'>{data.name}</p>
    </div>
       <p className='tdec'>{props.dec}</p>
    </div>
    </center>
    <center>
    <img src={props.img} className='tpost'/>
    </center>
    <center>
     <div className='tlike'>
<img src={love} className='tlove'
onClick={like}/>
<p className='llove'>{use.like?use.like.length:props.like.length}</p>
      <img src={comm} className='tcomm'/>
<p className='lcomm'>{props.comment?props.comment.length:0}</p>
     </div>
     </center>
    </div>
    <div className='mar'></div>
    </>
    )
}
