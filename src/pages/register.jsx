import React,{useState} from 'react'
import Logo from '../assets/images/logo.png';
import '../assets/css/login.css';
import axios from 'axios';
axios.defaults.withCredentials = true;
 const Login = ()=> {
  
    const [cnic,setCnic] = useState("");
    const [name,setName] = useState("");
    const [account,setAccount] = useState("");
    const [mobile,setMobile] = useState("");
    const [dob,setDob] = useState("");


    const [submitState,setSubmitState] = useState(0);
    const [confirmStatus,setConfirmStatus] = useState(0);
    return (<>
        { submitState===0 && (<div className='col-12 col-md-4' >
        <div className='card'>

         <form >
                <center>
                <div className='box'>
                    <img src={Logo} style={{"height":"100px"}}/>
                </div>
                <h3>Signup</h3>
                </center> 
                <div className='m-4 pl-4'><span className='alert alert-warning p-3'> Account does not exist in account holders list</span></div>
                <div className="form-group">
                <label>CNIC</label>
                    <input type="username" className="form-control" placeholder="XXXX-XXXXXXXXX-X" />
                <label>Account Number</label>
                    <input type="username" className="form-control" placeholder="XXXXXXXXXXXXXX" />
                <label>Mobile No.</label>
                    <input type="username" className="form-control" placeholder="+923XX-XXXXXXX" />
                <label>Full Name</label>
                    <input type="username" className="form-control" placeholder="Full Name" />
                <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email Address" />
                <label>Date of Birth</label>
                    <input type="date" className="form-control"/>
                </div>
                <button type="button" onClick={()=>{setSubmitState(1)}} className="btn btn-primary btn-block">Verify Credentials</button>
                <button type="button" onClick={()=>{window.location = "http://localhost:3000/";}} className="btn btn-primary btn-block">Go to Login</button>
         </form>
              
        </div> 

        </div>)
        }
        
        {
            submitState===1 && (<div className='col-12 col-md-5' >
                <div className='card'>
                <center>
                <div className='box'>
                    <img src={Logo} style={{"height":"100px"}}/>
                </div>
                </center>
                    <div className='m-4 pl-4'><span className='alert alert-warning p-3'>4-digit verification Code has been sent to +923XX-XXXXXXXX</span></div>
                    <div className='m-2'><input type="number" className="form-control" placeholder="Verification code" /></div>
                <button type="button" onClick={()=>{setSubmitState(2)}} className="btn btn-primary btn-block">Verify</button>
                </div>
            </div>)
        }

        {
            submitState===2 && (<div className='col-12 col-md-5' >
                <div className='card'>
                <center>
                <div className='box'>
                    <img src={Logo} style={{"height":"100px"}}/>
                </div>
                </center> 
                <div className='m-2'>
                    <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password" />
                    <label>Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Confirm Password" />
                </div>
                    <button type="button" onClick={()=>{setSubmitState(3);window.location = "http://localhost:3000/";}} className="btn btn-primary btn-block">Proceed</button>
                </div>
            </div>)
        }
    </>)
}

export default Login;