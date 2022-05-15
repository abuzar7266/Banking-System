import React,{useEffect, useState} from 'react';
import axios from 'axios';
const data = [{
    id:'87632HJSGDAJKSH76',
    amount:16000,
    date:'01-JAN-2021',
    status:'COMPLETED',
},{
    id:'87632HJSGDAJKSH77',
    amount:32000,
    date:'01-JAN-2021',
    status:'FAILED',
},{
    id:'87632HJSGDAJKSH78',
    amount:16000,
    date:'01-JAN-2021',
    status:'FAILED',
},{
    id:'87632HJSGDAJKSH79',
    amount:16000,
    date:'01-JAN-2021',
    status:'COMPLETED',
}]
const Transactions = ()=> {
    const [state,setState] = useState(0);
    const [feedback,setFeedback] = useState(0);
    const [fetched,setFetched] = useState(false);
    const [user,setUser] = useState({});
    const [transactions,setTransactions] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:3001/user/${localStorage.getItem('id')}`)
        .then((x)=>{
            if(x.status===200){
                if(x.data.status===true){
                    setUser(x.data.user);
                    setFetched(true);
                }
            }
        })
        if(fetched===true){
            axios.get(`http://localhost:3001/user/transactions/${user.bankRef._id}`)
            .then((x)=>{
                if(x.status===200){
                    setTransactions(x.data.transactions);
                    setFetched(true);
                }
            })
        }
    })
    return (<>
        {fetched===false && <p>Loading...</p>}
        { fetched===true && <div>
        {
            state===1 && <div>
                    <div className='card col-md-4 col-12' style={{marginLeft:'25%'}}>
                        <center><h5>Request for Bank Statement</h5></center>
                        <br />
                        <label htmlFor="">Password</label>
                        <input type="text" placeholder='Password'/>
                        <button onClick={()=>{setState(2)}} style={{borderRadius:'10px',boxShadow:'gray 0px 0px 1px',marginLeft:'10%',width:'30%',height:'40px',marginTop:"10px"}}> Next </button>
                    </div>
                </div>
        }
        {
            state===2 && <div>
            <div className='card col-md-4 col-12' style={{marginLeft:'25%'}}>
                <center><h5>Request for Bank Statement</h5>
                <p className='alert alert-danger'>4-digit verification code has been sent to your mobile number 0316*****21</p></center>
                <br />
                <label htmlFor="">OTP Verification</label>
                <input type="text" placeholder='8 8 8 8'/>
                <button onClick={()=>{setState(3)}} style={{borderRadius:'10px',boxShadow:'gray 0px 0px 1px',marginLeft:'10%',width:'40%',height:'40px',marginTop:"10px"}}> Confirm </button>
            </div>
            </div>
        }
        {
            state===3 && <div>
            <div className='card col-md-4 col-12' style={{marginLeft:'25%'}}>
                <center><h5>Request for Bank Statement</h5>
                <p className='alert alert-success'>Your request is processing, your bank statement will be delivered to your home address within 7-days</p></center>
                <br />
                <button onClick={()=>{setState(0)}} style={{borderRadius:'10px',boxShadow:'gray 0px 0px 1px',marginLeft:'10%',width:'30%',height:'40px',marginTop:"10px"}}> Finish </button>
            </div>
            </div>
        }
        { state===0 && feedback===0 && <div>
        <center>
        <h3>Transaction Activities</h3>
        </center>
        <div>
            <button onClick={()=>{setState(1)}} style={{borderRadius:'20px',marginLeft:'20px',marginBottom:'10px',boxShadow:'gray 0px 0px 5px'}}>Request Bank Statement</button>
            {/*<button onClick={()=>{setFeedback(1)}}style={{height:'55px',width:'200px',borderRadius:'50px',boxShadow:'gray 0px 0px 5px',marginLeft:"60%",marginTop:"10px"}}>Post Feedback</button>*/}
        </div>
        <div>
            <table className='table table-sm ml-3'>
                <thead>
                    <tr>
                        <th>Transaction#</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map((data)=>{
                            return (<tr style={{cursor:'pointer'}}>
                                <td>{data._id}</td>
                                <td>{data.sender===user.bankRef._id && <span style={{color:'red'}}>-{data.amount}</span>}{data.sender!==user.bankRef._id && <span style={{color:'green'}}>+{data.amount}</span>} PKR</td>
                                <td>{data.date}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
        </div>}
        </div>}
    </>)
}
export default Transactions;