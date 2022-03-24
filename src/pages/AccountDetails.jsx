import React, {useEffect} from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'


const Dashboard = () => {

    
    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (<>
    <div className='container'>
        <div className='row' style={{backgroundColor:"gray",borderRadius:"10px"}}><button className='btn btn-success'>Back</button></div>
        <br />
        <div className='card' style={{backgroundColor:"gray",color:"white",fontSize:"16px"}}>
        <div className='card' style={{backgroundColor:"#292A2D",color:"white",fontSize:"16px"}}>
            <div className='row card-body' style={{backgroundColor:"#292A2D",color:"white",fontSize:"16px"}}>
                <div className='col-12' style={{padding:"0px"}}>Abuzar<br/>
                7354658074634<br/>
                PK54HABBB0007354658074634<br/>
                Islamabad, F11</div>
            </div>
        </div>
        <div className='card mt-0' style={{backgroundColor:"gray",color:"black",fontSize:"16px",flexDirection:'row'}}>
        <div className='row'>
            <div className='col-8'><strong>Current Balance (PKR)</strong></div>
            <div className='col-4'> <strong>5136.37</strong></div>
        </div>
        </div>
        </div>
    </div>
    </>)
}

export default Dashboard
