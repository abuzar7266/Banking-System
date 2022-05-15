import React,{useState,useEffect} from 'react';
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner';
const UserPanel = () => {
    const [fetched,setFetched] = useState(false);
    const [user,setUser] = useState({});
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
    },[])
    return (<>
    <div className='container'>
        { fetched===true && <div><div className='row badge badge-dark'>
            <div className='col-2'><button onClick={()=>{window.location="http://localhost:3000/sendmoney"}} className='btn btn-success'> Send Money </button></div>
            <div className='col-2'><button className='btn btn-success' onClick={()=>{window.location="http://localhost:3000/bill"}}> Bill Payment </button></div>
            <div className='col-2'><button onClick={()=>{window.location="http://localhost:3000/recharge"}} className='btn btn-success'> Mobile Recharge </button></div>
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
                <div className='col-12' style={{fontSize:"14px"}}>{user.bankRef.name}</div>
                <div className='col-12' style={{fontSize:"14px"}}>{user.bankRef._id}</div>
            </div>
            <div className='row'>
                <div className='col-12' style={{fontSize:"48px",textAlign:"center",color:"green"}}>{user.bankRef.bankBalance}</div>
                <div className='col-12' style={{fontSize:"14px",textAlign:"center",color:"black"}}>Available Balance(PKR)</div>
            </div>
            <br /><br /><br />
        </div>}
        {
            fetched===false && <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        }
    </div>
    </>)
}

export default UserPanel
