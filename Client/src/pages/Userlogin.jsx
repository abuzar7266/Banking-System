import React,{useState} from 'react'
import Logo from '../assets/images/logo.png';
import '../assets/css/login.css';
import axios from 'axios';
axios.defaults.withCredentials = true;
 const Login = ()=> {
  
    const [email,setEmail]= useState(null);
    const [password,setPassword]= useState(null);
    const login = () =>{
        var body = {
            "email":email,
            "pass":password
        }
        axios.post('http://localhost:3001/user/login',body)
        .then((x)=>{
            //console.log(x.data.user);
            if(x.status===200){
                if(x.data.status===true){
                    let bankRef = x.data.user.bankRef;
                    localStorage.setItem('login',1);
                    localStorage.setItem('ACCESS','USER');
                    localStorage.setItem('id',x.data.user._id);
                    localStorage.setItem('accountNo',x.data.user.bankRef._id);
                    window.location = 'http://localhost:3000/user';
                }
            }
        })
    }
    return (
        <div className='col-12 col-md-4' >
        <div className='card'>

        <center>
                <div className='box'>
                    <img src={Logo} style={{"height":"100px"}}/>
                </div>
                <h3>User Login</h3>
                <div className='m-4 pl-2'><span className='alert alert-warning p-2'>Invalid username or password</span></div>
                </center>
                <div className="form-group">
                <label>Email Address</label>
                    <input type="text" onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email Address" />
                    <label>Password</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password" />
                    <a href="./recover" style={{color:'green'}}>forgot my password?</a>
                </div>
                <button type="button" onClick={login} className="btn btn-primary btn-block">Login</button>
                <button type="button" onClick={()=>{window.location = 'http://localhost:3000/register';}} className="btn btn-primary btn-block">Create a New Account</button>
        </div> 

        </div>
    )
}

export default Login;