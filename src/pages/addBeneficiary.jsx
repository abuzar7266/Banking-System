

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

    const [state,setState] = useState(0);
    return (<>
    <div className='container'>
        {state==0 && (<div><div className='row' style={{backgroundColor:"gray",borderRadius:"10px"}}><button className='btn btn-success'>Back</button></div>
        <br />
            <div className='col-6'><button className='btn btn-success mr-3' onClick={()=>{window.location = "http://localhost:3000/addbeneficiary"}} >Add Account</button><button className='btn btn-success' onClick={()=>{window.location = "http://localhost:3000/addBillAcc"}}>Add Bill Payee</button></div>
        <hr />
        <div className='card'>
                <div className='col-12'>
                    Other Accounts
                </div>
                { benefic.map((data)=>{
                    return (<>
                        <hr />
                        <div className='beneficiary'>
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
    </div>
    </>)
}

export default Dashboard;
