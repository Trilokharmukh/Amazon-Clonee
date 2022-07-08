// import {SubheadData} from './object.js'
import {Link} from "react-router-dom";
import logo from '../image/Amazon-Logo.png';
// import location from '../image/location1.png';
import sicon from '../image/search-icon.png';
import flag from "../image/flag.png";
import cart from "../image/cart.png";
import SubHeader from './SubHeader';



function Header({data}){

//-------------------- Props part--------------
    console.log(data);
    let Home=data.Home;
    let BSellor = data.BSellor;


// ------------------------- Object Rendering Part-------------
// console.log(SubheadData);

// let subarr = SubheadData.map((ele)=>{
//     console.log(ele)
   
//     return(
//         <>
//           <SubHeader dataSubhead={ele}/>
//         </>
//       )
//     })




// --------------------------header return part---------------

    return(
        <div className='Header-Main'>
            <div className="Header">
            <Link to="/">
            <div className='a-logo'><img src={logo} alt=""/></div></Link>
{/* 
            <div className='location'>
                <div className='loc-icon'><img src={location} alt="" /></div>
                <div className='loc-name'>
                    <div style={{fontWeight:"lighter", fontSize:"13px"}}>{data.hello}</div>
                    <div style={{fontWeight:"bold"}}>Select Your Location</div>
                </div>
            </div> */}

            <div className='Search-container'>
            <div className='all-cat'>
                <select value={"All"}>
                    <option>All</option>
                    <option>Mobile</option>
                    <option>Electronic</option>
                </select>
            </div>
                <div className='search'>
                    <input type="text" placeholder="Search Your Product"/>
                </div>
                
                <div className='search-icon'> <img src={sicon} alt=""/></div>
            </div>

            <div className='right-container'>
                <div className='flag'><img src={flag} alt=""/></div>
                <div className='account'>
                    <div style={{fontWeight:"lighter"}}>Hello, Sign in</div>
                    <div style={{fontWeight:"bolder"}}>Account & Lists</div>
                </div>
                <div className='return'> 
                    <div style={{fontWeight:"lighter"}}>Return</div>
                    <div style={{fontWeight:"bolder"}}>& Orders</div></div>
                <div className='cart'><img src={cart} alt=""/></div>

            </div>
            
        </div>

        <SubHeader dataSubhead={{Home, BSellor}}/>
        {/* {subarr} */}
        </div>
    )


}



export default Header;