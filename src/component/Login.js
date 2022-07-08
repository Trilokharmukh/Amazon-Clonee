import reg from '../image/register.png';


function Login(props){
    console.log(props)
    return(
        <div className="login">
            
            <div className="label">User Name</div>
            <input type="text"/>
            <br/>
            <div  className="label">Password </div>
            <input type="text"/>
            <br/>
            <button>Login</button>
            <img src={reg} alt=""/>
        </div>
    )
}

export default Login;