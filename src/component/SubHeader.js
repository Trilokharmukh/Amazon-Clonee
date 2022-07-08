import {Link} from "react-router-dom";

function SubHeader({dataSubhead}){

    console.log("Subheader file");
    console.log(dataSubhead);
    return(
        <div className="falana">
       <div className="subheader">

            {/* <div>{dataSubhead.SubData}</div> */}

            
            <Link to="/shirt" style={{textDecoration:"none", color:"white"}}><div>{dataSubhead.Home}</div></Link>
           <Link to="/pant" style={{textDecoration:"none", color:"white"}}> <div>{dataSubhead.BSellor}</div></Link>

            <div>Mobile</div>
            <div>Custmer Service</div>
            <div>Fashion</div>
            <div>Books</div>
            <div>Electronic</div>
            <div>Rents</div>
            <div>Service</div>
            <div>Prime</div>
        
        </div>
        </div>

    )
}

export default SubHeader;