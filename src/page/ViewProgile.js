import ProfileCom from'../component/ProfileCom'
import Timeline from'../component/Timeline'
import {useEffect,useState}from'react'
export default function Profile(){
  let [data,setData]=useState([])
  let [post,setPost]=useState([])
  let [load,setLoad]=useState(true)
  let got=localStorage.getItem('userid')
  let uri=`http://10.152.68.112:8080/user/get/${got}`
  let url=`http://10.152.68.112:8080/post/get/all/${got}`
  useEffect(()=>{
  fetch(uri).then((res)=>{return res.json()}).then((res)=>{setData(res)});
  
  fetch(url).then((res)=>{return res.json()}).then((res)=>{setPost(res);
  setLoad(false)}).catch((err)=>{console.log(err)})
  
  },[])
  console.log('post',post)
  return(
   <> 
   <ProfileCom data={data} post={post}/> 
   
   {load?<div className='load'></div>:
     post.map((e)=>{
     return(  <Timeline key={e._id} 
     id={e._id} userid={e.userid} dec={e.dec} img={e.img} like={e.like}/>   )
   })
   }
    </>
    )
}
