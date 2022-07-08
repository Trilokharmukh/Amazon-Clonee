import './App.css';
import './Header.css';
import Head from './component/Header';
import Card from './component/Card';
// import MainCompo from './component/MainCompo';
import object from './component/object';
import Shirt from './component/SubheadComponent/Shirt';
import Pant from './component/SubheadComponent/Pant';



import { BrowserRouter,Routes, Route } from "react-router-dom";



function App() {
    // --------send data to child--------
    let hello = "Hello";
    let Home = "Shirt";
    let BSellor = "Jeans"
  

  // -------object randering
  console.log(object);
    
  // let headerarr = object.map((ele)=>{
  // console.log(ele)
  // return(
  //     <>
  //       <MainCompo info={ele}/>
  //     </>
  //   )
  // })
 
//  -------app return part---------

  return (
    <div className="App">
    {/*header component jo app component me rendring hoga*/}
      
      
     

      <BrowserRouter>
      <Head data={{hello, Home, BSellor}}/>
      <Routes>
          <Route index element={<Card/>} />
          <Route path="/Card" element={ <Card/>} />
          <Route path="/shirt" element={<Shirt/>} />
          <Route path="/pant" element={<Pant/>} />
          

      </Routes>
    </BrowserRouter>

      

     {/* <subhead/> */}
     {/* {headerarr} */}
    </div>
  );
}

export default App;
