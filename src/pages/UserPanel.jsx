import React from 'react'
const UserPanel = () => {

    return (<>
    <div className='container'>
        <div className='row badge badge-dark'>
            <div className='col-2'><button onClick={()=>{window.location="http://localhost:3000/sendmoney"}} className='btn btn-success'> Send Money </button></div>
            <div className='col-2'><button className='btn btn-success' onClick={()=>{window.location="http://localhost:3000/bill"}}> Bill Payment </button></div>
            <div className='col-2'><button className='btn btn-success'> Mobile Recharge </button></div>
            <div className='col-2 ml-5'><button className='btn btn-success'> More </button></div>
        </div>
        <br />
        <div className='row'>
            <div className='col-6 badge badge-success'>What I Have</div><div className='col-6 ml-auto badge badge-success'>PKR</div>
        </div>
        <br />
            <div className='row'>
                <div className='col-4 alert alert-success'>Deposit Account</div>
            </div>
            <div className='row'>
                <div className='col-12' style={{fontSize:"14px"}}>Abuzar</div>
                <div className='col-12' style={{fontSize:"14px"}}>7612172716572571</div>
            </div>
            <div className='row'>
                <div className='col-12' style={{fontSize:"48px",textAlign:"center",color:"green"}}>5137.36</div>
                <div className='col-12' style={{fontSize:"14px",textAlign:"center",color:"black"}}>Available Balance</div>
            </div>
            <br /><br /><br />
    </div>
    </>)
}

export default UserPanel
