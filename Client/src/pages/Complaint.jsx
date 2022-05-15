import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Feedback = () => {
    const [status,setStatus] = useState(0);
    const [reason,setReason] = useState('');
    const [complaint,setComplaint] = useState('');
    const [fetched,setFetched] = useState(false);
    const [complaints,setComplaints] = useState([]);
    const handleComplaintPost = ()=>{
        var body = {
            "reason":reason,
            "complaint":complaint
        }
        axios.post(`http://localhost:3001/user/complaint/${localStorage.getItem('id')}`,body)
        .then(res=>{
            if(res.status===200){
                if(res.data.status===true){
                    window.location='http://localhost:3000/complaint';
                }
            }
        })
    }
    useEffect(()=>{
            axios.get(`http://localhost:3001/user/complaint/${localStorage.getItem('id')}`)
            .then(data=>{
                setComplaints(data.data.complaints);
                setFetched(true);
            })
    })
    return (
        <>
        {
            fetched===false && <div>Loading...</div>
        }
        { fetched===true && <div>
        <div className='container'>
            {status==0 && (<div>
                <div className='col-4 col-md-8'>
                    <button onClick={()=>{setStatus(1)}} style={{boxShadow:'grey -1px 1px 5px'}}>Lodge Comlaint</button>
                </div>
                <br />
                <table className='table table-sm' style={{textAlign:'center'}}>
                    <thead>
                        <tr>
                        <th>Complaint#</th>
                        <th>Subject</th>
                        <th>Date</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            //console.log(complaints)
                            complaints.map((com)=>{
                                let ctype='badge badge-light';
                                if(com.status==='PROCESSING'){
                                    ctype = 'badge badge-danger';
                                }else{
                                    ctype = 'badge badge-success';
                                }
                                return (<tr>
                                    <td>{com._id}</td>
                                    <td>{com.reason}</td>
                                    <th>{com.date}</th>
                                    <td><span className={`${ctype}`}>{com.status}</span></td>
                                </tr>)
                            })
                        }
                    </tbody>
                    </table>
                    </div>)
            }
        </div>
        {status==1 && (<div className='col-4 col-md-6'>
                    <div className='card'>
                        <center>
                            <h3>
                                Lodge New Complaint
                            </h3>
                        </center>
                        <div className='card-body'>
                            <input type="text" onChange={(e)=>{setReason(e.target.value)}} placeholder='Reason'/>
                            <br />
                            <label htmlFor="">Write Complaint</label>
                            <textarea cols="30" rows="1" onChange={(e)=>{setComplaint(e.target.value)}} placeholder='Write Text'></textarea>
                        </div>
                        <div className='col-4' ><button onClick={handleComplaintPost} style={{boxShadow:'grey -1px 1px 5px'}}>Submit</button></div>
                    </div>
                    </div>)
        }
        </div>}
        </>
    )
}
export default Feedback
