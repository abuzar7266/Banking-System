import React, { useEffect,useState } from 'react';
import axios from 'axios';
const Cards = () => {
    const [status,setStatus] = useState(0)
    const [option,setOption] = useState('')
    const [id,setID] = useState('');
    const [fetched,setFetched] = useState(false);
    const [user,setUser] = useState({});
    const [cards,setCards] = useState([]);
    const HandleOptions = (e,id)=>{
        if(e.target.value==='Deactivated' || e.target.value==='Activated' || e.target.value==='Deleted'){
            var body = {
                "status":e.target.value
            }
            axios.put(`http://localhost:3001/user/card/updateStatus/${id}`,body)
            .then((res)=>{
                if(res.status==200){
                    window.location='http://localhost:3000/cards_manage';
                }
            })
        }
    }
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
            axios.get(`http://localhost:3001/user/card/${user.bankRef._id}`)
            .then((resp)=>{
                if(resp.status===200){
                    if(resp.data.status===true){
                        setCards(resp.data.cards);
                    }
                }
            })
        }
    })
    const handleOptions = (e)=>{
        setOption(e.target.value);
    }

    return (
        <>
        <div className='container'>
                <button onClick={()=>{window.location='http://localhost:3000/order'}} style={{border:'1px solid black'}}>Order Credit/Debit Card</button>
                <button onClick={()=>{window.location='http://localhost:3000/activate'}} style={{border:'1px solid black',marginLeft:'50px'}}>Activate New Credit/Debit Card</button>
                <button onClick={()=>{window.location='http://localhost:3000/cheque_request'}}style={{border:'1px solid black',marginLeft:'50px'}}>View Cheque Book Request</button>
                <br />
                <br />

                <table className='table table-sm'>
                    <thead>
                        <tr>
                            <th>Card#</th>
                            <th>Category</th>
                            <th>Card Holder</th>
                            <th>CVV</th>
                            <th>Issue</th>
                            <th>Expire</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cards.map((data)=>{
                                return (<tr>
                                    <td>{data._id}</td>
                                    <td>{data.type}</td>
                                    <td>{data.CardName}</td>
                                    <td>{data.cvv}</td>
                                    <td>{data.issuedate}</td>
                                    <td>{data.expiredate}</td>
                                    {data.status=='Deactivated' && <td className='badge badge-pill badge-danger m-1'>Deactivated</td>}
                                    {data.status=='Activated' && <td className='badge badge-pill badge-success m-1'>Activated</td>}
                                    <td>
                                        <select name={data.CN} id={data.CN} onChange={(e)=>{HandleOptions(e,data._id)}}>
                                            <option value="XD" selected disabled hidden>Choose here</option>
                                            {data.status=='Activated' && <option value="Deactivated">Deactivate Temporarily</option>}
                                            {data.status=='Activated' && <option value="Deleted">Deactivate Permanently</option>}
                                            {data.status==='Deactivated' && <option value="Activated">Reactivate</option>}
                                            {data.status==='Activated' && <option value="CP">Change PIN</option>}
                                        </select>
                                    </td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
        </div>
        </>
    )
}
export default Cards
