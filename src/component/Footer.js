import '../style/footer.css'
import home from'../image/home (1).png'
import search from'../image/search-interface-symbol.png'
import plus from'../image/plus.png'
import profile from'../image/user.png'
import {useNavigate } from"react-router-dom";
export default function Footer(){
  let history=useNavigate()
  return(
   <div className='footer'> 
   <div className='fun'>
   <img src={home} alt='home' 
   className='home' 
   onClick={()=>{history('/')}}/>
   
   <img src={search} alt='search'
   className='search'
   onClick={()=>{history('/Search')}}/>
   
   <img src={plus} alt='plus'
   className='plus'
   onClick={()=>{history('/Post') }}/>
   
   <img src={profile} alt='profile'
   className='profile'
   onClick={()=>{history('/ProFile')}}/>
   </div>
    </div>
    )
}
