import axios from 'axios'
import React, {useEffect, useState} from 'react';
import Spinner from 'react-bootstrap/Spinner';
axios.defaults.withCredentials=true;
const Account = () => {
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
    })
    return (<>
    <div className='container'>
        { fetched===true && <div><div className='row' style={{backgroundColor:"gray",borderRadius:"10px"}}><button className='btn btn-success'>Back</button></div>
        <br />
        <button onClick={()=>{window.location='http://localhost:3000/request_cheque'}} style={{color:'black',boxShadow:'black 1px 1px 10px',margin:'10px'}}>Request New Cheque Book</button>
        <div className='card' style={{backgroundColor:"gray",color:"white",fontSize:"16px"}}>
        <div className='card' style={{backgroundColor:"#292A2D",color:"white",fontSize:"16px"}}>
            <div className='row card-body' style={{backgroundColor:"#292A2D",color:"white",fontSize:"16px"}}>
                <div className='col-12' style={{padding:"0px"}}>{user.bankRef.name}<br/>
                {user.bankRef._id}<br/>
                PK54HABBB000{user.bankRef._id}<br/>
                Islamabad, F11</div>
            </div>
        </div>
        <div className='card mt-0' style={{backgroundColor:"gray",color:"black",fontSize:"16px",flexDirection:'row'}}>
        <div className='row'>
            <div className='col-8'><strong>Current Balance (PKR)</strong></div>
            <div className='col-4'> <strong>{user.bankRef.bankBalance}</strong></div>
        </div>
        </div>
        </div></div>}
        {
            fetched===false && <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        }
    </div>
    </>)
}
export default Account
