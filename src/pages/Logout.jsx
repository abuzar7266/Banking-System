import React from 'react'

import Table from '../components/table/Table'

import customerList from '../assets/JsonData/customers-list.json'


const Customers = () => {
    const logout = () =>{
        localStorage.removeItem('login');
        window.location = "http://localhost:3000/";
    }
    return (
        <>
        {
            logout()
        }
        </>
    )
}

export default Customers
