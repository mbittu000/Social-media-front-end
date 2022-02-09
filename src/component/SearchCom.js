import '../style/SearchCom.css'
import Rej from'../component/Rej'
import {useState}from'react'
export default function SearchCom(){
  let [data,setData]=useState('')
  let [user,setUser]=useState('')
  let [doo,setDoo]=useState(false)

  console.log(user)
  let enter=(e)=>{
    if (e.key === 'Enter') {
      let uri=`http://10.152.68.112:8080/user/find/${data}`
  fetch(uri).then((res)=>{return res.json()}).then((res)=>{setUser(res);
    setDoo(true)
  }).catch((err)=>{console.log(err)})
    }
  }
  return(
   <div className='SearchCom'> 
   <div className='scom'>

   <input type='text' className='srch'
   onChange={(e)=>{setData(e.target.value)}}   onKeyDown={enter} value={data}/>
   <div className='clear'
   onClick={()=>{setData('')}}>X</div>

   </div>

   <center>
   
{doo?
  user.map((e)=>{
    return  <Rej key={e.id} id={e.id}
  follow={e.follow} following={e.following}
  username={e.username} name={e.name}/>
  }):<p>Pleach enter something</p>
}

   </center>
    </div>
    )
}
