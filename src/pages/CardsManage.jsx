import React, { useState } from 'react'
var cards = [{
    CN:'6421425142561',
    Name:'ABUZAR',
    catg:'UNION CARD',
    cvv:337,
    idate:'01-APRIL-2022',
    jdate:'01-APRIL-2027',
    status:'ACT'
},{
    CN:'712781621212',
    Name:'ABUZAR',
    catg:'MASTER CARD',
    cvv:337,
    idate:'01-JAN-2021',
    jdate:'02-JAN-2022',
    status:'DEACT-TEMP'
},
{
    CN:'712781621213',
    Name:'ABUZAR MEHAR',
    catg:'VISA CARD',
    cvv:778,
    idate:'01-JAN-2019',
    jdate:'02-JAN-2026',
    status:'ACT'
}]
const Cards = () => {
    const [status,setStatus] = useState(0)
    const [option,setOption] = useState('')
    const [id,setID] = useState('')
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
                                    <td>{data.CN}</td>
                                    <td>{data.catg}</td>
                                    <td>{data.Name}</td>
                                    <td>{data.cvv}</td>
                                    <td>{data.idate}</td>
                                    <td>{data.jdate}</td>
                                    {data.status=='DEACT-TEMP' && <td className='badge badge-pill badge-danger m-1'>Deactivated</td>}
                                    {data.status=='ACT' && <td className='badge badge-pill badge-success m-1'>Activated</td>}
                                    <td>
                                        <select name={data.CN} id={data.CN} onChange={(e)=>{window.location=`http://localhost:3000/${e.target.value}`}}>
                                            <option value="XD" selected disabled hidden>Choose here</option>
                                            {data.status=='ACT' && <option value="DT">Deactivate Temporarily</option>}
                                            {data.status=='ACT' && <option value="DA">Deactivate Permanently</option>}
                                            {data.status==='DEACT-TEMP' && <option value="AA">Reactivate</option>}
                                            {data.status==='ACT' && <option value="CP">Change PIN</option>}
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
