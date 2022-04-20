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
                                Request for Cheque Book
                            </h3>
                        </center>
                        <div className='card-body'>
                            <label htmlFor="">Confirm your Password</label>
                            <input type="text" placeholder='Password'/>
                            <br />
                            <button onClick={()=>{setStatus(1)}}>Confirm</button>
                        </div>
                    </div>
                </div>)
            }
            {
                status==1 && (<div className='col-4 col-6'>
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
