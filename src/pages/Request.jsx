
import React, { useState } from 'react'
var request = [{
    rid:'7654H7263G4',
    type:'CHEQUE-BOOK',
    date:'20-APRIL-2022',
    status:'PROCESSING'
},
{
    rid:'672362GAS7L',
    type:'CREDIT-CARD',
    date:'16-APRIL-2022',
    status:'COMPLETED'
},
{
    rid:'912812JUEY',
    type:'DEBIT-CARD',
    date:'16-APRIL-2022',
    status:'PROCESSING'
}]
const Request = () => {
    return (
        <>
            <div className='container'>
                <center>
                    <h3>
                        Manage Request
                    </h3>
                </center>
                <div className='col-4 col-md-6'>
                    <button>Cancelled Request</button>
                </div>
                <br />
                <div className='col-8 col-md-8'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Request#</th>
                                <th>Type</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                request.map(data=>{
                                    return (<tr><td>{data.rid}</td>
                                    <td>{data.type}</td>
                                    <td>{data.date}</td>
                                    <td>{data.status}</td>
                                    <button className='badge badge-sm' style={{marginTop:'10px',height:'30px',fontSize:'10px',backgroundColor:'black'}}>Cancel</button></tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Request
