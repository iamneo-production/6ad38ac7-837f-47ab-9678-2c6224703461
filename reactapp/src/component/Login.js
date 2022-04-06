import React,{Component} from "react";


class Login extends Component{
    render(){
      return(
    <div className="container">
      <form  >
        <h1>Login</h1>
        <div className="ui form">
          <div className="field">
            <input
              type="text" id="email"
              name="email"
              placeholder="Enter Email" required  
            />
          </div>
          <div className="field">
            <input
              type="password" id="password"
              name="password"
              placeholder="Enter Password" required            
            />
          </div> 
          <button className="fluid ui button blue" id="submitButton">Submit</button>
          
        </div>
        <br/>
        <div>
        <h5>New to Booking? &nbsp;&nbsp;<a href="/signup">Click Here</a></h5>
        </div>
      </form>
    </div>
        )
    }
}
export default Login;
 
