import React from 'react'

import Table from '../components/table/Table'

import customerList from '../assets/JsonData/customers-list.json'


const Customers = () => {
    const logout = () =>{
        localStorage.removeItem('login');
        localStorage.removeItem('id');
        localStorage.removeItem('user');
        localStorage.removeItem('accountNo');
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
