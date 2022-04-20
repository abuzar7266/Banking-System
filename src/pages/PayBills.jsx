import React, { useState } from 'react'
const BillPay = () => {
    const [status,setStatus] = useState(0)
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
                        <th>Due Date</th>
                        <th>Issue Date</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>68723862GH001</td>
                            <td>GEPCO PVT LTD</td>
                            <td>58127 PKR</td>
                            <td>30-APRIL-2022</td>
                            <td>12-DEC-2021</td>
                            <td><span onClick={()=>{setStatus(1)}} className='badge badge-danger'>Unpaid</span></td>
                        </tr>
                        <tr>
                            <td>68723862GH021</td>
                            <td>GEPCO PVT LTD</td>
                            <td>58127 PKR</td>
                            <td>01-JAN-2022</td>
                            <td>12-DEC-2021</td>
                            <td><span onClick={()=>{setStatus(1)}} className='badge badge-warning'>Late</span></td>
                        </tr>
                        <tr>
                            <td>68723862GH022</td>
                            <td>GEPCO PVT LTD</td>
                            <td>58127 PKR</td>
                            <td>30-APRIL-2022</td>
                            <td>12-DEC-2021</td>
                            <td><span onClick={()=>{setStatus(1)}} className='badge badge-danger'>Unpaid</span></td>
                        </tr>
                        <tr>
                            <td>68723877GH001</td>
                            <td>GEPCO PVT LTD</td>
                            <td>58127 PKR</td>
                            <td>30-APRIL-2022</td>
                            <td>12-DEC-2021</td>
                            <td><span onClick={()=>{setStatus(1)}} className='badge badge-danger'>Unpaid</span></td>
                        </tr>
                        <tr>
                            <td>68723722GH001</td>
                            <td>GEPCO PVT LTD</td>
                            <td>58127 PKR</td>
                            <td>30-APRIL-2022</td>
                            <td>12-DEC-2021</td>
                            <td><span onClick={()=>{setStatus(1)}} className='badge badge-danger'>Unpaid</span></td>
                        </tr>
                        <tr>
                            <td>68213862GH001</td>
                            <td>GEPCO PVT LTD</td>
                            <td>58127 PKR</td>
                            <td>16-APRIL-2022</td>
                            <td>12-DEC-2021</td>
                            <td><span onClick={()=>{setStatus(1)}} className='badge badge-warning'>Late</span></td>
                        </tr>
                        <tr>
                            <td>68723862GH002</td>
                            <td>GEPCO PVT LTD</td>
                            <td>58127 PKR</td>
                            <td>30-APRIL-2022</td>
                            <td>12-DEC-2021</td>
                            <td><span onClick={()=>{setStatus(1)}} className='badge badge-danger'>Unpaid</span></td>
                        </tr>
                        <tr>
                            <td>68723862GH003</td>
                            <td>GEPCO PVT LTD</td>
                            <td>58127 PKR</td>
                            <td>30-APRIL-2022</td>
                            <td>12-DEC-2021</td>
                            <td><span onClick={()=>{setStatus(1)}} className='badge badge-danger'>Unpaid</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>)}
            {
                status==1 && (
                    <div className='col-md-12 col-7'>
                    <div className='card'>
                        <center>
                            <h3>
                                Pay Utility Bills
                            </h3>
                        </center>
                        <br />
                        <div>
                            <p className='alert'>68723862GH001 <br /> GEPCO PVT LTD<br /> 58127 PKR</p>
                            <input type="text" placeholder='Password'/>
                            <br />
                            <button className='btn btn-secondary' onClick={()=>{setStatus(2)}}>Pay</button>
                        </div>
                    </div>
                    </div>)
            }
            {
                status==2 && (
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
                        <br />
                        <p className='alert'>68723862GH001 <br /> GEPCO PVT LTD<br /> 58127 PKR</p>
                        <div>
                            <input type="text" placeholder='8 8 8 8'/>
                            <br />
                            <button className='btn btn-secondary' onClick={()=>{setStatus(0)}}>Verify</button>
                        </div>
                    </div>
                    </div>)
            }
        </div>
        </>
    )
}
export default BillPay
