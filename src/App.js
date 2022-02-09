import './App.css';
//import react from'react'
import Home from'./page/Home'
import Profile from'./page/Profile'
import Post from'./page/Post'
import Search from'./page/Search'
import Login from'./page/Login'
import Follow from'./page/Follow'
import Following from'./page/Following'
import ViewProfile from'./page/ViewProgile'
import Register from'./page/Register'
import Header from'./component/Header'
import Footer from'./component/Footer'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {useState}from'react'
function App() {
  //localStorage.setItem('token','eyJhbGciOiJIUzI1NiJ9.NjFmMTMwOGRmNzQ0YjljNTYxMzQ4OTBh.1xJCTfeCbSUIOD5ws_jaSH0lSM2y_HlWMwFFTnHposw')
let [data,setData]=useState(localStorage.getItem('token'))
console.log(data)
  return (
<>
<BrowserRouter>
<Header/>





{data?
<div>
<Footer/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Profile" element={<Profile/>}/>
<Route path="/Post" element={<Post/>}/>
<Route path="/Search" element={<Search/>}/>
<Route path="/Login" element={<Login/>}/>
<Route path="/followers" element={<Follow/>}/>
<Route path="/Following" element={<Following/>}/>
<Route path="/Register" element={<Register/>}/>
<Route path="/ViewProfile"
element={<ViewProfile/>}/>
</Routes>
</div>
:<Routes>
<Route path="/" 
element={<Login dot={setData}/>}/>
<Route path="/Register" 
element={<Register  dot={setData}/>}/>
<Route path="/Profile"  
element={<Login dot={setData} />}/>
<Route path="/Post"  dot={setData}
element={<Login dot={setData} />}/>
<Route path="/Search"  dot={setData}
element={<Login dot={setData} />}/>
</Routes>
}

</BrowserRouter>
</>
  );
}

export default App;
