import React, {useEffect, useState} from 'react'
import axios from 'axios';

import '../assets/css/sendmoney.css'
const benefic = [{
    name:'Abuzar',
    accountName:'ABU ZAR',
    number:'67346376473647637',
    bank:'Habib Bank Ltd'
},
{
    name:'Ahmad',
    accountName:'AHMAD',
    number:'03167815023',
    bank:'Easypaisa / Telenor Microfinance Bank'
},
{
    name:'Zakee',
    accountName:'ZAKEE',
    number:'73636263726232',
    bank:'Mezan Bank Ltd'
}];

const Send = () => {

    const [state,setState] = useState(0);

    const [fetched,setFetched] = useState(false);
    const [user,setUser] = useState({});
    const [beneficiaryList,setBeneficiaryList] = useState([]);
    const [selected,setSelected] = useState({});
    const [amount,setAmount] = useState(0.00);
    const [amountStatus,setAmountStatus] = useState(0);
    const [receipt,setReceipt] = useState({});
    const [pass,setPass] = useState('');
    const [reciever,setReciever] = useState({});
    const stateChange = () =>{
        setState(state+1);
    };
    const handleSelect = (data) =>{
        setSelected(data);
        stateChange();
    }
    const handlePaymentTransfer = ()=>{
        console.log(selected);
        if(user.pass===pass){
            var body = {
                "amount":amount,
                "reciever":selected.Accountbeneficiary._id
            }
            console.log(body);
            axios.post(`http://localhost:3001/user/accountTransaction/${user.bankRef._id}`,body)
            .then((x)=>{
                console.log(x);
                if(x.status===200){
                    setReceipt(x.data.receipt);
                    setReciever(x.data.reciever);
                    setState(4);
                }
            })
        }else{
            console.log('Incorrect Password');
        }
    }
    const handleAmountSet = (e) =>{
        if(user.bankRef.bankBalance<e.target.value){
            console.log('Insufficient Balance');
            setAmountStatus(1);
        }else{
            setAmount(parseFloat(e.target.value));
            setAmountStatus(0);
        }
    }
    useEffect(()=>{
        axios.get(`http://localhost:3001/user/accountBeneficiary/${localStorage.getItem('id')}`)
        .then((x)=>{
            console.log(x.data.beneficiary);
            setBeneficiaryList(x.data.beneficiary);
        })
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
    return (<>
    <div className='container'>
        { fetched===true && <div>
        {state==0 && (<div><div className='row' style={{backgroundColor:"gray",borderRadius:"10px"}}><button className='btn btn-success'>Back</button></div>
        <br />
            <div className='col-6'><button className='btn btn-success' onClick={()=>{window.location = "http://localhost:3000/addbeneficiary"}} >Add Account</button></div>
        <hr />
        <div className='card'>
                <div className='col-12'>
                    Other Accounts
                </div>
                { beneficiaryList.map((data)=>{
                    let name='';
                    let id='';
                    let type='';
                    if(data.type==='BILL'){
                        return (<></>);
                    }
                    else if(data.type==='BANK'){
                        name=data.Accountbeneficiary.name;
                        id=data.Accountbeneficiary._id;
                        type="BANK";
                    }
                    return (<>
                        <hr />
                        <div className='beneficiary' onClick={()=>{handleSelect(data)}}>
                            <div className='col-6 m-0'>
                                {name}
                                <br />
                                {id}
                                <br />
                                <div className='' style={{color:'green'}}>{name}</div>
                                {type}
                            </div>
                        </div>
                    </>);
                    })
                }
        </div></div>)}
        {
            state==1 && (<div className='col-12 col-md-7' >
            <div className='card'>
    
             <form>
                    <center>
                    <h3>Send Money</h3>
                    { amountStatus===1 && <p className='alert alert-danger'>insufficient account balance</p>}
                    </center>
                    <div className="form-group">
                        <p className='alert alert-success'>Account Number: {selected.Accountbeneficiary._id} <br /> Account Name: {selected.Accountbeneficiary.name} </p>
                        <label>Amount</label>
                        <input type="text" onChange={handleAmountSet} className="form-control" placeholder="Amount" />
                    </div>
                    <button type="button" onClick={()=>{stateChange();}} className="btn btn-primary btn-block">Proceed</button>
            </form>
            </div> 
            </div>)
        }
        {
            state==2 && (<div className='col-12 col-md-7' >
            <div className='card'>
    
             <form>
                    <center>
                    <h3>OTP Verification</h3>
                    </center>
                    <div className="form-group">
                    <div className='m-4 pl-4'><span className='alert alert-warning p-3'>4-digit verification Code has been sent to +923XX-XXXXXXXX</span></div>
                    <div className='m-2'><input type="number" className="form-control" placeholder="Verification code" /></div>
                    </div>
                    <button type="button" onClick={()=>{stateChange();}} className="btn btn-primary btn-block">Verify</button>
             </form>
            </div> 
            </div>)
        }
        {
            state==3 && (<div className='col-12 col-md-7' >
            <div className='card'>
    
             <form>
                    <center>
                    <h3>Password Verification</h3>
                    </center>
                    <div className="form-group">
                    <div className='m-2'><input type="text" onChange={(e)=>{setPass(e.target.value)}} placeholder="Password" /></div>
                    </div>
                    <button type="button" onClick={handlePaymentTransfer} className="btn btn-primary btn-block">Proceed</button>
             </form>
            </div> 
            </div>)
        }
        {
            state==4 && (<div className='col-12 col-md-7' >
            <div className='card'>
    
             <form>
                    <center>
                    <h3>Payment Receipt</h3>
                    </center>
                    <div className="form-group alert">
                    <div>Date: {receipt.date}</div>  Receipt#: {receipt._id}
                    <p className=''>Account Number: {receipt.reciever} <br /> Account Name: {reciever.name} <br />Amount: {amount} PKR</p>
                    </div>
                    <button type="button" onClick={()=>{window.location = "http://localhost:3000/user"}} className="btn btn-primary btn-block">Home</button>
             </form>
            </div> 
            </div>)
        }
        </div>}
    </div>
    </>)
}

export default Send
