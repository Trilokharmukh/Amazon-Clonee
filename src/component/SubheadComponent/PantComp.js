import "../Style/card.css";
export default function PantComp({PantData}){

    console.log("PANT MIAN")
    console.log(PantData)
    return(
        <div className='parant'>
        {
            PantData.map((ele) => {
                return (
                    <div className='card-section'>
                        <div className='card-img'>

                            <img src={ele.image} alt="" />
                        </div>
                        <div className='card-name'>{ele.name}</div>
                        <div className='card-description'>{ele.des}</div>
                        <div className='card-price'>price <sup style={{ marginTop: "10px" }}>₹</sup>{ele.price}/- <s style={{ color: "black", fontSize: "smaller" }}> ₹1999</s></div>
                        <div className='card-quantity'><i>in stock {ele.quantity}</i></div>
                        <button>Add to cart</button>
                    </div>

                )
            })
            // console.log(ele);

        }
</div>        
    )
}
