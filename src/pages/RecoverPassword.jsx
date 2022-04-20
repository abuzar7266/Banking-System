import React, { useState } from 'react'
const Forgot = () => {
    const [status,setStatus] = useState(0)
    return (
        <>
        <div className='container'>
            {
                status==0 && (<div className='col-4 col-6'>
                    <div className='card'>
                        <center>
                            <h3>
                                Forgot Your Password
                            </h3>
                        </center>
                        <div className='card-body'>
                            <label htmlFor="">Enter your username</label>
                            <input type="text" placeholder='Username'/>
                            <br />
                            <button onClick={()=>{setStatus(1)}}>Proceed</button>
                        </div>
                    </div>
                </div>)
            }
            {
                status==1 && (<div className='col-4 col-6'>
                    <div className='card'>
                        <center>
                            <h3>
                                Forgot Your Password
                            </h3>
                            <p className='alert'>4 Digit Verification code has been sent to your mobile# 0300-00000000</p>
                        </center>
                        <div className='card-body'>
                            <label htmlFor="">Enter OTP verification code</label>
                            <input type="text" placeholder='8 8 8 8'/>
                            <br />
                            <button onClick={()=>{setStatus(2)}}>Verify</button>
                        </div>
                    </div>
                </div>)
            }
            {
                status==2 && (<div className='col-4 col-6'>
                    <div className='card'>
                        <center>
                            <h3>
                                Forgot Your Password
                            </h3>
                            <p className='alert'>4 Digit Verification code has been sent to your mobile# 0300-00000000</p>
                        </center>
                        <div className='card-body'>
                            <label htmlFor="">Enter New Password</label>
                            <input type="text" placeholder='8 8 8 8'/>
                            <label htmlFor="">Confirm Password</label>
                            <input type="text" placeholder='8 8 8 8'/>
                            <br />
                            <button onClick={()=>{window.location='http://localhost:3000/'}}>Confirm</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
        </>
    )
}
export default Forgot
