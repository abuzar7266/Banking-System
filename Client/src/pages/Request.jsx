
import React, { useEffect,useState } from 'react';
import axios from 'axios';
const Request = () => {
    const [fetched,setFetched] = useState(false);
    const [user,setUser] = useState({});
    const [request,setRequest] = useState([]);
    const [fetch2,setFetch2] = useState(false);
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
            axios.get(`http://localhost:3001/user/request/${user.bankRef._id}`)
            .then((x)=>{
                console.log(x.data.request);
                setRequest(x.data.request);
                setFetch2(true);
            })
        }
    },[fetched])
    return (
        <>
            {fetch2===true && <div className='container'>
                <center>
                    <h3>
                        Manage Request
                    </h3>
                </center>
                <br />
                <div className='col-8 col-md-8'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Request#</th>
                                <th>Type</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                request.map(data=>{
                                    return (<tr><td>{data._id}</td>
                                    <td>{data.type}</td>
                                    <td>{data.date}</td>
                                    <td>{data.status}</td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>}
        </>
    )
}
export default Request
