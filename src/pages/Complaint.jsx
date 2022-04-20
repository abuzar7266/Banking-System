import React, { useState } from 'react'
const Feedback = () => {
    const [status,setStatus] = useState(0)
    return (
        <>
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
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1827F77644</td>
                            <td>Something Happened</td>
                            <td><span className='badge badge-danger'>Processing</span></td>
                        </tr>
                        <tr>
                            <td>1827F72182</td>
                            <td>XYZXYZXYZ</td>
                            <td><span className='badge badge-success'>Resolved</span></td>
                        </tr>
                        <tr>
                            <td>1827F72182</td>
                            <td>XYZXYZXYZ</td>
                            <td><span className='badge badge-danger'>Processing</span></td>
                        </tr>
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
                            <input type="text" placeholder='Reason'/>
                            <br />
                            <label htmlFor="">Write Complaint</label>
                            <textarea name="" id="" cols="30" rows="1" placeholder='Write Text'></textarea>
                        </div>
                        <div className='col-4' ><button onClick={()=>{setStatus(0)}} style={{boxShadow:'grey -1px 1px 5px'}}>Submit</button></div>
                    </div>
                    </div>)
        }
        </>
    )
}
export default Feedback
