import PantComp from "./PantComp"
import Data from "../Card-data.js"

export default function Pant(){
    // console.log("pant")
    // console.log(pantData);

    let PantData = Data.filter(ele=> ele.type==="pant")

    console.log(PantData)
    return(
        <>
            
            <PantComp PantData={PantData}/>
        </>
    )

}