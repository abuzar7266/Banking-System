

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

const Dashboard = () => {

    const [state,setState] = useState(0);
    const [fetched,setFetched] = useState(false);
    const [user,setUser] = useState({});
    const [beneficiaryList,setBeneficiaryList] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:3001/user/accountBeneficiary/${localStorage.getItem('id')}`)
        .then((x)=>{
            console.log(x.data.beneficiary);
            setBeneficiaryList(x.data.beneficiary);
            setFetched(true);
        })
    })
    return (<>
    <div className='container'>
        { fetched===true && <div>
        {state==0 && (<div><div className='row' style={{backgroundColor:"gray",borderRadius:"10px"}}><button className='btn btn-success'>Back</button></div>
        <br />
            <div className='col-6'><button className='btn btn-success mr-3' onClick={()=>{window.location = "http://localhost:3000/addbeneficiary"}} >Add Account</button><button className='btn btn-success' onClick={()=>{window.location = "http://localhost:3000/addBillAcc"}}>Add Bill Payee</button></div>
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
                        name=data.BillBeneficiary.companyName;
                        id=data.BillBeneficiary._id;
                        type=`${data.BillBeneficiary.consumerType} Bill`;
                    }
                    else if(data.type==='BANK'){
                            name=data.Accountbeneficiary.name;
                            id=data.Accountbeneficiary._id;
                            type="BANK";
                    }
                    return (<>
                        <hr />
                        <div className='beneficiary'>
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
    </div>}
    </div>
    </>)
}

export default Dashboard;
