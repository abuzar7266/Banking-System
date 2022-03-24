import React, {useEffect, useState} from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'
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

const Dashboard = () => {

    
    const themeReducer = useSelector(state => state.ThemeReducer.mode);
    const [name,setName] = useState('?');
    const [number,setNumber] = useState('?');
    const [accountName,setAccountName] = useState('?');
    const [bank,setBank] = useState('?');

    const [state,setState] = useState(0);
    const stateChange = () =>{
        setState(state+1);
    };
    const save = (data)=>{
        setName(data.name);
        setAccountName(data.accountName);
        setNumber(data.number);
        setBank(data.bank);
    };
    return (<>
    <div className='container'>
        {state==0 && (<div><div className='row' style={{backgroundColor:"gray",borderRadius:"10px"}}><button className='btn btn-success'>Back</button></div>
        <br />
            <div className='col-6'><button className='btn btn-success' onClick={()=>{window.location = "http://localhost:3000/addbeneficiary"}} >Add Account</button></div>
        <hr />
        <div className='card'>
                <div className='col-12'>
                    Other Accounts
                </div>
                { benefic.map((data)=>{
                    return (<>
                        <hr />
                        <div className='beneficiary' onClick={()=>{stateChange();save(data)}}>
                            <div className='col-6 m-0'>
                                {data.name}
                                <br />
                                {data.number}
                                <br />
                                <div className='' style={{color:'green'}}>{data.accountName}</div>
                                {data.bank}
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
                    </center>
                    <div className="form-group">
                        <p className='alert alert-success'>Account Number: {number} <br /> Account Name: {accountName} <br /> Branch/Bank Name: {bank}</p>
                        <label>Amount</label>
                        <input type="username"  className="form-control" placeholder="Amount" />
                        <label>Email Address</label>
                        <input type="password"  className="form-control" placeholder="Email Address" />
                        <label>Mobile No.</label>
                        <input type="password"  className="form-control" placeholder="Email Address" />
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
                    <div className='m-2'><input type="number" className="form-control" placeholder="Password" /></div>
                    </div>
                    <button type="button" onClick={()=>{stateChange();}} className="btn btn-primary btn-block">Proceed</button>
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
                    <div>Date: 01-JAN-2021</div>  Receipt#: 16255XX76RT
                    <p className=''>Account Number: {number} <br /> Account Name: {accountName} <br /> Branch/Bank Name: {bank} <br />Amount: 586.37 PKR</p>
                    </div>
                    <button type="button" onClick={()=>{window.location = "http://localhost:3000/user"}} className="btn btn-primary btn-block">Home</button>
             </form>
            </div> 
            </div>)
        }
    </div>
    </>)
}

export default Dashboard
