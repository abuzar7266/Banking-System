import React from 'react'

import { Route, Switch } from 'react-router-dom'

import UserLogin from '../pages/Userlogin';
import AdminLogin from '../pages/Adminlogin';
import Register from '../pages/register';
import UserDash from '../pages/UserPanel';
import Account from '../pages/AccountDetails';
import sendMoney from '../pages/sendMoney';
import addBeneficiary from '../pages/addBeneficiary';
import addAccount from '../pages/addAccount';
import addBillBen from '../pages/addBillBen';
import Logout from '../pages/Logout';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={UserLogin}/>
            <Route path='/admin' exact component={AdminLogin}/>
            <Route path='/register' exact component={Register}/>
            <Route path='/user' exact component={UserDash}/>
            <Route path='/account' exact component={Account}/>
            <Route path='/sendmoney' exact component={sendMoney}/>
            <Route path='/beneficiary' exact component={addBeneficiary}/>
            <Route path='/addbeneficiary' exact component={addAccount}/>
            <Route path='/addBillAcc' exact component={addBillBen}/>
            <Route path='/logout' exact component={Logout}/>
        </Switch>
    );
}

export default Routes
