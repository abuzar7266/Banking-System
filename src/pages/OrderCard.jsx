import React, { useState } from 'react'
const OrderCard = () => {
    const [type,setType] = useState('0')
    const [org,setOrg] = useState('0')
    const [state,setState] = useState(0)
    const handleOptions = () =>{
        if(type!='0' && org!='0'){
            setState(1)
        }
    }
    return (
        <>
        <div className='container'>
                <center>
                    <h3>
                        Order Banking Card
                    </h3>
                    <br />
                    <br />
                { state==0 && <div className='card col-4 col-md-6'>
                <label htmlFor="">Select Category</label>
                <select name="type" id="type" onChange={(e)=>{setType(e.target.value)}}>
                    <option value='0' selected hidden>Select Category</option>
                    <option value='1'>Credit Card</option>
                    <option value='2'>Debit Card</option>
                </select>
                <br />
                        { type!='0' && <><label htmlFor="">Select Card</label>
                        <select name="Z" id="Z" onChange={(e)=>{setOrg(e.target.value)}}>
                            <option value='0' selected hidden>Select Category</option>
                            <option value='1' >Union</option>
                            <option value='2' >Master</option>
                            <option value='3' >Visa</option>
                        </select>
                        </>}
                    <br />
                    <div className='col-4 col-md-6'>
                    <button onClick={handleOptions}>Proceed</button>
                    </div>
                </div>}
                {
                    state==1 && <div className='col-4 col-md-6'>
                        <p className='alert alert-success'>Your Request has been placed,you will recieve your card within next 15 days</p>
                        <button onClick={()=>{window.location='http://localhost:3000/cards_manage'}}>Finish</button>
                    </div>
                }
                </center>
        </div>
        </>
    )
}
export default OrderCard
