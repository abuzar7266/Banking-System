import React, { useEffect,useState } from 'react'
import axios from 'axios';
const Forgot = () => {
    const [status,setStatus] = useState(0);
    const [fetched,setFetched] = useState(false);
    const [user,setUser] = useState({});
    const [pass,setPass] = useState('');
    const [error,setError] = useState(false)
    useEffect(()=>{
        axios.get(`http://localhost:3001/user/${localStorage.getItem('id')}`)
        .then((x)=>{
            if(x.status===200){
                if(x.data.status===true){
                    console.log(x.data);
                    setUser(x.data.user);
                    setFetched(true);
                }
            }
        })
    })
    const handleVerifyPass = (e) => {
        if(user.pass===pass){
            setError(false);
            axios.post(`http://localhost:3001/user/request/chequeBook/${user.bankRef._id}`)
            .then((x)=>{
                if(x.status===200){
                    if(x.data.status===true){
                        setStatus(2);
                    }
                }
            })
        }
        else{
            setError(true);
        }
    }
    return (
        <>
        <div className='container'>
            {
                status==1 && (<div className='col-4 col-6'>
                    <div className='card'>
                        <center>
                            <h3>
                                Request for Cheque Book
                            </h3>
                        </center>
                        <div className='card-body'>
                            <label htmlFor="">Confirm your Password</label>
                            <input type="text" onChange={(e)=>{setPass(e.target.value)}} placeholder='Password'/>
                            <br />
                            <button onClick={handleVerifyPass}>Confirm</button>
                        </div>
                    </div>
                </div>)
            }
            {
                status==0 && (<div className='col-4 col-6'>
                    <div className='card'>
                        <center>
                            <h3>
                                Request for Cheque Book
                            </h3>
                            <p className='alert'>4 Digit OTP has been sent to your mobile# 0316******21</p>
                        </center>
                        <div className='card-body'>
                            <label htmlFor="">Enter OTP Verification Code</label>
                            <input type="text" placeholder='8 8 8 8'/>
                            <br />
                            <button onClick={()=>{setStatus(1)}}>Verify</button>
                        </div>
                    </div>
                </div>)
            }
            {
                status==2 && (<div className='col-4 col-6'>
                    <div className='card'>
                        <center>
                            <h3>
                                Request for Cheque Book
                            </h3>
                            <p className='alert alert-success'>Cheque Book request has been submitted and currently under processing.</p>
                        </center>
                        <div className='card-body'>
                            <button onClick={()=>{window.location = 'http://localhost:3000/account'}}>Finish</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
        </>
    )
}
export default Forgot
