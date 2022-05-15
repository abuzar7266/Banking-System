import React, {useEffect, useState } from 'react';
import axios from 'axios';
const OrderCard = () => {
    const [type,setType] = useState('0')
    const [org,setOrg] = useState('0')
    const [state,setState] = useState(0);
    const [pass,setPass] = useState('');
    const [fetched,setFetched] = useState(false);
    const [user,setUser] = useState({});
    const [error,setError] = useState(false);
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
    const handleOptions = () =>{
        if(type!='0' && org!='0'){
            setState(1)
        }
    }
    const handlePass = ()=>{
        if(user.pass===pass){
            var body = {
                "CardName":org,
                "type":type
            }
            console.log(body);
            axios.post(`http://localhost:3001/user/request/card/${user.bankRef._id}`,body)
            .then((request)=>{
                if(request.status===200){
                    if(request.data.status===true){
                        console.log(request.data);
                        setState(2);
                    }
                }
            })
            setError(false);
        }else{
            setError(true);
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
                    <option value='CREDIT'>Credit Card</option>
                    <option value='DEBIT'>Debit Card</option>
                </select>
                <br />
                        { type!='0' && <><label htmlFor="">Select Card</label>
                        <select name="Z" id="Z" onChange={(e)=>{setOrg(e.target.value)}}>
                            <option value='0' selected hidden>Select Category</option>
                            <option value='UNION' >Union</option>
                            <option value='MASTER' >Master</option>
                            <option value='VISA' >Visa</option>
                        </select>
                        </>}
                    <br />
                    <div className='col-4 col-md-6'>
                    <button onClick={handleOptions}>Proceed</button>
                    </div>
                </div>}
                { state==1 && <div className='card col-4 col-md-6'>
                    <center><h3>Password Verification</h3></center>
                    <label htmlFor="">Password</label>
                    <input type="password" onChange={(e)=>{setPass(e.target.value)}} className='form-control' placeholder='******' />
                    <br />
                    <div className='col-4 col-md-6'>
                    <button onClick={handlePass}>Confirm</button>
                    </div>
                </div>}
                {
                    state==2 && <div className='col-4 col-md-6'>
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
