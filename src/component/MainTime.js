import Timeline from'../component/Timeline'
export default function MainTime(props){
  //let data=props.data.reverse()
//  console.log('res',data)
  
  return(
 <>   
   { props.data.map((e)=>{
     return(  <Timeline key={e._id} 
     id={e._id} userid={e.userid} dec={e.dec} img={e.img} like={e.like}/>   )
   })

   }
    
  </>
  )
}