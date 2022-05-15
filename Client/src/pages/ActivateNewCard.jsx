import React, { useEffect,useState } from 'react';
import axios from 'axios';
const Activate = () => {
    const [state,setState] = useState(0);
    const [card,setCard] = useState('');
    const [cvv,setCVV] = useState('');
    const [code,setCode] = useState('');
    const [pin,setPin] = useState('');
    const [pass,setPass] = useState('');
    const [fetched,setFetched] = useState(false);
    const [user,setUser] = useState({});
    const [error,setError] = useState(false);
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
    const nextHandle = () =>{
        if(state<6){
            setState(state+1)
        }
    }
    const backHandle = () =>{
        if(state>0){
        setState(state+1)
        }
    }
    const handleConfirmActive = ()=>{
        //console.log(user.pass)
        if(user.pass===pass){
            setError(false);
            let body = {
                "cardNo":card,
                "cvv":cvv,
                "pin":pin,
                "code":parseInt(code),
            }
            axios.post('http://localhost:3001/user/card/activate',body)
            .then((x)=>{
                if(x.status===200){
                    if(x.data.status===true){
                        setState(state+1);
                    }else{
                        console.log('Error');
                    }
                }
            })
        }else{
            setError(true);
        }
    }
    return (
        <>
        {fetched===true && <div className='container'>
            <center>
            <h3>Activate Banking Card</h3>
            <br />
            </center>
            {state==0 && <div className='col-4 col-md-6'>
                <label htmlFor="">Enter Card Number</label>
                <input type="text" onChange={(e)=>{setCard(e.target.value)}} placeholder='XXX XXXX XXXX XXXX'/>
                <br />
                <button onClick={nextHandle}>Next</button>
            </div>}
            {state==1 && <div className='col-4 col-md-6'>
                <label htmlFor="">Enter CVV</label>
                <input type="text" onChange={(e)=>{setCVV(e.target.value)}} placeholder='8 8 8'/>
                <br />
                <button onClick={nextHandle}>Proceed</button>
            </div>}
            {state==2 && <div className='col-4 col-md-6'>
                <label htmlFor="">Enter Activation Code</label>
                <input type="text" onChange={(e)=>{setCode(e.target.value)}} placeholder='8 8 8'/>
                <br />
                <button onClick={nextHandle}>Confirm</button>
            </div>}
            {state==3 && <div className='col-4 col-md-6'>
                <label htmlFor="">Create New PIN</label>
                <input type="text" onChange={(e)=>{setPin(e.target.value)}} placeholder='8 8 8'/>
                <br />
                <button onClick={nextHandle}>Create</button>
            </div>}
            {state==4 && <div className='col-4 col-md-6'>
                <label htmlFor="">Enter Account Password</label>
                <input type="text" onChange={(e)=>{setPass(e.target.value)}} placeholder='8 8 8'/>
                <br />
                <button onClick={handleConfirmActive}>Activate</button>
            </div>}
            {state==5 && <div className='col-4 col-md-6'>
                <p className='alert alert-success'>Card has been activated successfully</p>
                <button onClick={()=>{window.location='http://localhost:3000/cards_manage'}}>Finish</button>
            </div>}
        </div>}
        </>
    )
}
export default Activate
