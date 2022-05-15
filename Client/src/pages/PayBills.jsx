import React, { useEffect, useState } from 'react';
import axios from 'axios';
const BillPay = () => {
    const [status,setStatus] = useState(0);
    const [bills,setBills] = useState([]);
    const [fetched,setFetched] = useState(false);
    const [selected,setSelected] = useState({});
    const [user,setUser] = useState({});
    const [pass,setPass] = useState('');
    const [receipt,setReceipt] = useState({});
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
        axios.get(`http://localhost:3001/user/bills/${localStorage.getItem('id')}`)
        .then(x=>{
            console.log(x.data.bills);
            setBills(x.data.bills);
            setFetched(true);
        })
    },[])
    const handlePayInit = (data)=>{
        setSelected(data);
        setStatus(1);
    }
    const handleConfirmPay = ()=>{
        if(user.pass===pass){
            console.log('Matched');
            var body = {
                'billID':selected._id
            }
            axios.post(`http://localhost:3001/user/pay/bills/${user.bankRef._id}`,body)
            .then((response)=>{
                setReceipt(response);
                window.location='http://localhost:3000/bill';
            })
        }
    }
    return (
        <>
        <div className='container'>
            {status==0 && (<div>
                <table className='table table-sm'>
                    <thead>
                        <tr>
                        <th>Consumer#</th>
                        <th>Organization</th>
                        <th>Amount</th>
                        <th>Issue Date</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bills.map((data)=>{
                                let date = new Date();
                                let due = new Date(data.dueDate);
                                let ctype = 'badge badge-light';
                                let status = 'UNPAID';
                                if(data.status==='UNPAID'){
                                    if(date>due){
                                    status='LATE';
                                    ctype = 'badge badge-warning';
                                    }else{
                                    ctype = 'badge badge-danger';
                                    }
                                }
                                else if(data.status==='PAID'){
                                    status='PAID';
                                    ctype = 'badge badge-success';
                                }
                                return ( <tr>
                                    <td>{data.consumerNo._id}</td>
                                    <td>{data.consumerNo.companyName}</td>
                                    <td>{data.amount}</td>
                                    <td>{data.issueDate}</td>
                                    <td>{data.dueDate}</td>
                                    <td><span className={`${ctype}`}>{data.status}</span></td>
                                    <td>{(status==='UNPAID' || status==='LATE') && <button style={{backgroundColor:'red',borderRadius:'10px',height:'32px',color:'white',fontSize:'15px'}} onClick={()=>{handlePayInit(data)}}>Pay</button>}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>)}
            {
                status==2 && (
                    <div className='col-md-12 col-7'>
                    <div className='card'>
                        <center>
                            <h3>
                                Pay Utility Bills
                            </h3>
                        </center>
                        <br />
                        <div>
                            <p className='alert'>{selected.consumerNo._id}<br />{selected.consumerNo.companyName}<br /> {selected.amount} PKR</p>
                            <label htmlFor="">Passoword</label>
                            <input type="text" onChange={(e)=>{setPass(e.target.value)}} placeholder='Password'/>
                            <br />
                            <button className='btn btn-secondary' onClick={handleConfirmPay}>Pay</button>
                        </div>
                    </div>
                    </div>)
            }
            {
                status==1 && (
                    <div className='col-md-12 col-7'>
                    <div className='card'>
                        <center>
                            <h3>
                                Pay Utility Bills
                            </h3>
                            <h4>
                                OTP Verification
                            </h4>
                        </center>
                        <div>
                            <input type="text" placeholder='8 8 8 8'/>
                            <br />
                            <button className='btn btn-secondary' onClick={()=>{setStatus(2)}}>Verify</button>
                        </div>
                    </div>
                    </div>)
            }
        </div>
        </>
    )
}
export default BillPay
