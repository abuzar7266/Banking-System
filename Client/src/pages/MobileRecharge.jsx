import React, { useEffect,useState } from 'react';
import axios from 'axios';
const data = [{
    id:'7213816JHGAD73',
    mobile:'03167815023',
    amount:350,
    date:'01-JAN-2021',
    status:'COMPLETED'
},{
    id:'7213816JHGAD73',
    mobile:'03167815023',
    amount:350,
    date:'01-JAN-2021',
    status:'FAILED'
},{
    id:'7213816JHGAD73',
    mobile:'03167815023',
    amount:350,
    date:'01-JAN-2021',
    status:'COMPLETED'
},{
    id:'7213816JHGAD73',
    mobile:'03167815023',
    amount:350,
    date:'01-JAN-2022',
    status:'FAILED'
}]
const Recharge = ()=>{
    const [state,setState] = useState(0);
    const [fetched,setFetched] = useState(false);
    const [user,setUser] = useState({});
    const [mobile,setMobile] = useState('');
    const [amount,setAmount] = useState(0.00);
    const [overflow,setOverflow] = useState(false); 
    const [history,setHistory] = useState([]);
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
        if(fetched===true){
        axios.get(`http://localhost:3001/user/recharge/${user.bankRef._id}`)
        .then((x)=>{
            console.log(x.data.transaction);
            setHistory(x.data.transaction);
        })}
    })
    var handleAmount = (e) =>{
        if(user.bankRef.bankBalance>=e.target.value && user.bankRef.bankBalance>=50){
            setAmount(e.target.value);
            setOverflow(false);
        }
        else{
            setOverflow(true);
        }
    }
    var handleNext = ()=>{
        if(overflow===false){
            setState(2);
        }
    }
    var handlePostRecharge = () =>{
        var body = {
            "mobileNo":mobile,
            "amount":parseFloat(amount)
        }
        axios.post(`http://localhost:3001/user/mobile/recharge/${user.bankRef._id}`,body)
        .then((x)=>{
            console.log(x);
            if(x.status===200){
                setState(4);
            }
        })
    }
    return (<>
        <center><h3>Mobile Recharge</h3></center>
        {
            state===0 && <button onClick={()=>{setState(1)}} style={{borderRadius:'20px',margin:'20px'}}>+ Mobile Recharge</button>
        }
        {
            state===0 && <table className='table table-sm'>
                <thead>
                    <tr>
                        <th>Transaction#</th>
                        <th>Mobile#</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history.map((data)=>{
                            return (<tr>
                                <td>{data._id}</td>
                                <td>{data.mobileNet.mobileNo}</td>
                                <td>{data.amount} PKR</td>
                                <td>{data.date} PKR</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        }
        {state===1 && <div className='card col-md-4' style={{marginLeft:'35%'}}>
            {overflow===true && <p className='alert alert-danger'>Insufficient Balance</p>}
            <label htmlFor="">Mobile Number
            <input type="text" onChange={(e)=>{setMobile(e.target.value)}} placeholder='03XX-XXXXXXX'/></label>
            <label htmlFor="">Amount
            <input type="text" onChange={handleAmount} placeholder='>50'/></label>
            <button onClick={handleNext} style={{width:'35%',borderRadius:'20px',margin:'5px'}}>Next</button>
        </div>}
        {state===2 && <div className='card col-md-4' style={{marginLeft:'35%'}}>
            <p className='alert alert-danger'>4-digit OTP has been sent to your mobile number 0316*****21</p>
            <label htmlFor="">OTP Verification Code
            <input type="text" placeholder='8 8 8 8'/></label>
            <button onClick={()=>{setState(3)}} style={{width:'35%',borderRadius:'20px',margin:'5px'}}>Verify</button>
        </div>}
        {state===3 && <div className='card col-md-4' style={{marginLeft:'35%'}}>
            <label htmlFor="">Password
            <input type="text" placeholder='Password'/></label>
            <button onClick={handlePostRecharge} style={{width:'35%',borderRadius:'20px',margin:'5px'}}>Verify</button>
        </div>}
        {state===4 && <div className='card col-md-4' style={{marginLeft:'35%'}}>
            <p className='alert alert-success'>Transaction Completed, you will recieve a confirmation message soon.</p>
            <button onClick={()=>{window.location='http://localhost:3000/recharge'}} style={{width:'35%',borderRadius:'20px',margin:'5px'}}>Finish</button>
        </div>}
    </>)
}
export default Recharge;