import CardData from "../Card-data.js";
import ShirtComp from "./ShirtComp.js";


export default function Shirt(){
    console.log(CardData);
    
    let shirtData = CardData.filter(ele=>ele.type==="shirt")
    console.log(shirtData);
    return(

        <>
            <ShirtComp CardData={shirtData}/>
        </>
    )


}