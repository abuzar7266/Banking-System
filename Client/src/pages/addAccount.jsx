import React, {useEffect, useState} from 'react'
import axios from 'axios'
const Dashboard = () => {
    const [state,setState] = useState(0);
    const [name,setName] = useState('JOHN WILLIAMS');
    const [number,setNumber] = useState('');
    const [bank,setBank] = useState('Select Bank/Branch');
    const [accountInfo,setAccountInfo] = useState({});
    const [fetched,setFetched] = useState(false);
    const [user,setUser] = useState({});
    const [pass,setPass] = useState('')
    useEffect(()=>{
        axios.get(`http://localhost:3001/user/${localStorage.getItem('id')}`)
        .then((x)=>{
            if(x.status===200){
                if(x.data.status===true){
                    //console.log(x.data);
                    setUser(x.data.user);
                    setFetched(true);
                }
            }
        })
    })
    const saveAccount = (e) =>{
        setNumber(e.value);
    }
    const fetchAccount = ()=>{
        axios.get(`http://localhost:3001/user/accountHolder/${number}`)
        .then(x=>{
            setAccountInfo(x.data.data);
            setState(1);
        })
    }
    const confirmBeneficiary = () =>{
        var body = {
            "beneficiary":number,
        }
        if(pass!==user.pass){
            console.log('Incorrect Password');    
        }
        else{
            axios.post(`http://localhost:3001/user/accountBeneficiary/${user._id}`,body)
            .then((x)=>{
                if(x.status===200){
                    window.location = 'http://localhost:3000/beneficiary';
                }
            })
        }
    }
    return (<>
    <div className='container'>
        {state==0 && (<div className='col-6 col-md-7'>
            <div className='card'>
                <center>
                <div>
                    <h3>Add Account</h3>
                </div>
                </center>
                <div>
                    <label>Account Number</label>
                    <input type="text" onChange={(e)=>{setNumber(e.target.value);}} value={number} placeholder='Account Number'/><br />
                    <button onClick={fetchAccount}>Verify</button>
                </div>
            </div>
        </div>)}
        { state==1 && (<div className='col-5 col-md-8'>
            <div className='card'>
                <div>
                    <label>Beneficiary Detail</label>
                    <p className='alert alert-warning'>{accountInfo.name} <br /> {accountInfo._id}</p>
                    <button onClick={()=>{setState(2)}}>Confirm</button>
                </div>
            </div>
            </div>
        )}
        {state==2 && (<div className='col-4 col-md-7'>
            <div className='card'>
                <div>
                <label>Password</label>
                    <input type="password" onChange={(e)=>{setPass(e.target.value)}} className="form-control" placeholder="Password" /><br />
                    <button onClick={confirmBeneficiary}>Proceed</button>
                </div>
            </div>
        </div>)}
    </div>
    </>)
}

export default Dashboard