import React,{useState} from 'react'
import Logo from '../assets/images/logo.png';
import '../assets/css/login.css';
import axios from 'axios';
axios.defaults.withCredentials = true;
 const Login = ()=> {
  
    const [username,setUsername]= useState(null);
    const [password,setPassword]= useState(null);

   function prevent(event){
    event.defaultPrevent();
   }

   const ValidateLogin = async ()=>{
            var user = await axios.post('http://localhost:3001/login',{username:username,password:password});
            if(user.status && user.data.session){
                console.log(user);
                    localStorage.setItem('LoginStatus',true);
                    localStorage.setItem('User',user.data.session.FullName);
                    localStorage.setItem('Access',user.data.session.Job_Title);
                    window.location.href = 'http://localhost:3000/';
            }
            else{
                console.log(user);
            }
   }
   const ValidateLogout = async ()=>{
            
            var response = await axios.post('http://localhost:3001/logout');
                if(response.status==200)
                {
                        console.log(response);
                       // localStorage.removeItem('LoginStatus');
                       // localStorage.removeItem('User');
                       // localStorage.removeItem('Access');
                }
                else{
                    console.log(response);
                }
   }
    return (
        <div className='col-12 col-md-4' >
        <div className='card'>

         <form onSubmit={prevent}>
                <center>
                <div className='box'>
                    <img src={Logo} style={{"height":"100px"}}/>
                </div>
                <h3>Admin Login</h3>
                <div className='m-4 pl-2'><span className='alert alert-warning p-2'>Invalid username or password</span></div>
                </center> 

                <div className="form-group">
                    <label>Admin ID</label>
                    <input type="username" onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Admin ID" />
                    <label>Password</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password" />
                </div>
                <button type="button" onClick={ValidateLogin} className="btn btn-primary btn-block">Login</button>
         </form>
        </div>
        </div>
    )
}
export default Login;