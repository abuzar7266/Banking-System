import react,{useEffect,useState} from 'react';
import axios from 'axios';
const data = [{
    id:'7126517HJAS76',
    amount:'170,000',
    idate:'01-JAN-2021',
    ddate:'01-JAN-2024',
    status:'ISSUED',
},{
    id:'7126517HJAS76',
    amount:'170,000',
    idate:'01-JAN-2020',
    ddate:'01-JAN-2021',
    status:'LATE',
},{
    id:'7126517HJAS76',
    amount:'170,000',
    idate:'01-JAN-2000',
    ddate:'01-JAN-2023',
    status:'RETURNED',
},{
    id:'7126517HJAS76',
    amount:'170,000',
    idate:'01-JAN-2021',
    ddate:'01-JAN-2024',
    status:'ISSUED',
},{
    id:'7126517HJAS76',
    amount:'170,000',
    idate:'01-JAN-2020',
    ddate:'01-JAN-2021',
    status:'LATE',
},{
    id:'7126517HJAS76',
    amount:'170,000',
    idate:'01-JAN-2000',
    ddate:'01-JAN-2023',
    status:'RETURNED',
}]
const ManageLoan = () =>{
    const [state,setState] = useState(0);
    const [fetched,setFetched] = useState(false);
    const [user,setUser] = useState({});
    const [amount,setAmount] = useState(0.00);
    const [pass,setPass] = useState('');
    const [error,setError] = useState(false);
    const [loan,setLoan] = useState([]);
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
            axios.get(`http://localhost:3001/user/loan/${user.bankRef._id}`)
            .then((x)=>{
                if(x.status===200){
                    setLoan(x.data.loans);
                }
            })
        }
    },[fetched])
    const handleRequestLoan = ()=>{
        if(user.pass===pass){
            setError(false);
            var body = {
                "amount":parseFloat(amount)
            }
            axios.post(`http://localhost:3001/user/loan/request/${user.bankRef._id}`,body)
            .then((x)=>{
                if(x.status===200){
                    setState(4);
                }
            })
        }
        else{
            console.log('Incorrect Password');
            setError(true);
        }
    }
    return (<>
    { fetched===true && <div>
        {
            state>=1 && <div>
                <center>
                <h3> Request new loan</h3>
                </center>
                {
                    state===1 && <center><div className='card col-md-4'>
                        <h6> Enter loan amount</h6>
                        <input type="text" onChange={(e)=>{setAmount(e.target.value)}} placeholder='amount'/>
                        <button onClick={()=>{setState(2)}} style={{borderRadius:'10px',width:'100px',margin:'10px'}}>Next</button>
                    </div>
                    </center>
                }{
                    state===2 && <center><div className='card col-md-4'>
                    <h6>OTP Verification</h6>
                    <p className='alert alert-success'>4 digit verification code has been sent to your mobile number 0316*****21</p>
                    <input type="text" placeholder='8 8 8 8'/>
                    <button onClick={()=>{setState(3)}}style={{borderRadius:'10px',width:'100px',margin:'10px'}}>Next</button>
                    </div>
                    </center>
                }{
                    state===3 && <center><div className='card col-md-4'>
                    <h6>Password Verification</h6>
                    <input type="text" onChange={(e)=>{setPass(e.target.value)}} placeholder='Password'/>
                    <button onClick={handleRequestLoan} style={{borderRadius:'10px',width:'140px',margin:'10px'}}>Confirm</button>
                    </div>
                    </center>
                }
                {
                    state===4 && <center><div className='card col-md-4'>
                    <h6>Request Completed</h6>
                    <p className='alert alert-success'>Your loan request application is under review,you will soon recieve the decision of loan request from our representative</p>
                    <button onClick={()=>{window.location = 'http://localhost:3000/manageLoan'}} style={{borderRadius:'10px',width:'130px',margin:'10px'}}>Finish</button>
                    </div>
                    </center>
                }
            </div>
        }
        { state===0 && <div>
            <center>
            <h3>Loan Management</h3>
            </center>
            <div style={{marginLeft:'20px'}}>
            <button style={{boxShadow:'gray 0px 0px 10px'}} onClick={()=>{setState(1)}}>Request Loan</button><br /><br />
        </div>
        <table className='table'>
            <thead>
                <tr>
                    <th>Loan#</th>
                    <th>Amount</th>
                    <th>Issue Date</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    loan.map((data)=>{
                        let cType='';
                        if(data.status==='PROCESSING'){
                            cType='badge badge-sm badge-primary'
                        }
                        else if(data.status==='RETURNED'){
                            cType='badge badge-sm badge-success'
                        }
                        else if(data.status==='APPROVED'){
                            cType='badge badge-sm badge-secondary'
                        }
                        else if(data.status==='REJECTED')
                        {
                            cType='badge badge-sm badge-danger'
                        }
                        return (<tr>
                            <td>{data._id}</td>
                            <td>{data.amount}</td>
                            <th>{data.issuedate}</th>
                            <th>{data.duedate}</th>
                            <td style={{marginTop:'12px',height:'30px',width:'100px',fontSize:'11px'}} className={cType}>{data.status}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
        </div>
        }
    </div>}
    </>)
}
export default ManageLoan;