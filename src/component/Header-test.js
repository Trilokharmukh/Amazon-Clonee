// function component

function Header(props){
    let item=props.item
    return(
        
        <div>
            <div className="header">
                <img className="login-logo" src='/login.png' alt=""/>
               <span>User Login {item} </span>
            </div>
        </div>
    )
}

export default Header;