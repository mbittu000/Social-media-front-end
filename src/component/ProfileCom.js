import Hr from'../image/user.png'
import '../style/ProfileCom.css'
import { useNavigate } from "react-router-dom";
export default function ProfileCom({data,post}){
  let history=useNavigate()
  localStorage.setItem('fok',data._id)
  console.log(post)
  let goers=()=>{
    history('/followers')
  } 
  let going=()=>{
    history('/following')
  }
  return(
  <>
   <div className='pc'> 
   <center>
<img src={data.image?data.image:Hr} className='ppro'/>
<p className='puser'>{data.username}</p>
<p className='pname'>{data.name}</p>
<div className='info'>
<br/><br/>
<div className='ppost'>
<p>{post?post.length:0}</p>
<p>post's</p>
</div>

<div className='pfollow' onClick={goers}>
<p>{data.following?data.following.length:0}</p>
<p>followers</p>
</div>

<div className='pfollowing' onClick={going}>
<p>{data.follow?data.follow.length:0}</p>
<p>following</p>
</div>
</div>
</center>
    </div>
    <div className='mar'></div>
    
  </>  
    )
}