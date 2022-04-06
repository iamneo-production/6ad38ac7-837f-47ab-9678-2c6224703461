import React,{Component} from "react";


class Signup extends Component{
    render(){
      return(
    <div className="container">
      <form >
        <h1>SIGN UP</h1>
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
          <div className="field">          
            <input
              type="tel" id="mobilenumber" 
              name="number"
              placeholder="Enter Mobile Number"
              pattern="[0-9]{10}" required            
            />
          </div>  
          <script>

          </script>      
          <div className="field">          
            <select id="Userrole" >
                    <option value="Userrole">Select Userrole</option>
                    <option value="Super Admin">Super Admin</option>
                    <option value="Admin">Admin</option>
                    <option value="Customer">Customer</option>       
            </select>          
          </div>        
          <div className="field">          
            <input
              type="text" id="username"
              name="username"
              placeholder="Username" required           
            />
          </div>        
          <div className="field">          
            <input
              type="text" id="age"
              name="Age"
              placeholder="Enter Age" required           
            />
          </div>        
          <button className="fluid ui button blue" id="submitButton">Submit</button>
        </div>
        
        <h5>Go to Login &nbsp;&nbsp;<a href="/login">Click Here</a></h5>

      </form>
      
    </div>
    ) 
  }
}
 
export default Signup;