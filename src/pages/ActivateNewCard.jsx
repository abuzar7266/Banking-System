import React, { useState } from 'react'
const Activate = () => {
    const [state,setState] = useState(0)
    const nextHandle = () =>{
        if(state<6){
            setState(state+1)
        }
    }
    const backHandle = () =>{
        if(state>0){
        setState(state+1)
        }
    }
    return (
        <>
        <div className='container'>
            <center>
            <h3>Activate Banking Card</h3>
            <br />
            </center>
            {state==0 && <div className='col-4 col-md-6'>
                <label htmlFor="">Enter Card Number</label>
                <input type="text" placeholder='XXX XXXX XXXX XXXX'/>
                <br />
                <button onClick={nextHandle}>Next</button>
            </div>}
            {state==1 && <div className='col-4 col-md-6'>
                <label htmlFor="">Enter Expiry Date</label>
                <input type="text" placeholder='DD-MMM-YYYY'/>
                <br />
                <button onClick={nextHandle}>Next</button>
            </div>}
            {state==2 && <div className='col-4 col-md-6'>
                <label htmlFor="">Enter CVV</label>
                <input type="text" placeholder='8 8 8'/>
                <br />
                <button onClick={nextHandle}>Proceed</button>
            </div>}
            {state==3 && <div className='col-4 col-md-6'>
                <label htmlFor="">Enter Activation Code</label>
                <input type="text" placeholder='8 8 8'/>
                <br />
                <button onClick={nextHandle}>Confirm</button>
            </div>}
            {state==4 && <div className='col-4 col-md-6'>
                <label htmlFor="">Create New PIN</label>
                <input type="text" placeholder='8 8 8'/>
                <br />
                <button onClick={nextHandle}>Create</button>
            </div>}
            {state==5 && <div className='col-4 col-md-6'>
                <label htmlFor="">Enter Account Password</label>
                <input type="text" placeholder='8 8 8'/>
                <br />
                <button onClick={nextHandle}>Activate</button>
            </div>}
            {state==6 && <div className='col-4 col-md-6'>
                <p className='alert alert-success'>Card has been activated successfully</p>
                <button onClick={()=>{window.location='http://localhost:3000/cards_manage'}}>Finish</button>
            </div>}
        </div>
        </>
    )
}
export default Activate
