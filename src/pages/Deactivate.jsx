
import React, { useState } from 'react'
const Deactivate = () => {
    const [state,setState] = useState(0)
    return (
        <>
            <div className='container'>
                <center>
                    <h3>
                        Card Deactivation
                    </h3>
                    { state==0 && <div className='col-6 col-8'><p className='alert alert-success'>OTP 4-digit code has been sent to your mobile 0316*****21</p></div>}
                </center>
                <br />
                { state==0 && <div className='col-6 col-md-8'>
                    <label htmlFor="">Enter OTP Code(4-digit)</label>
                    <input type="text" placeholder='8 8 8 8'/>
                    <br />
                    <button onClick={()=>{setState(1)}}>Verify</button>
                </div>} 
                { state==1 && <div className='col-6 col-md-8'>
                    <label htmlFor="">Account Password</label>
                    <input type="text" placeholder='Password'/>
                    <br />
                    <button onClick={()=>{setState(2)}}>Confirm</button>
                </div>} 
                { state==2 && <div className='col-6 col-md-8'>
                    <p className='alert alert-success'>Your Card has been deactivated successfully</p>
                    <button onClick={()=>{window.location='http://localhost:3000/cards_manage'}}>Finish</button>
                </div>} 
            </div>
        </>
    )
}
export default Deactivate
