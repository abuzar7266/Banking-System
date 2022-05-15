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
import PayBill from '../pages/PayBills'
import Complaint from '../pages/Complaint'
import Forgot from '../pages/RecoverPassword'
import Cheque from '../pages/OrderChequeBook'
import Cards from '../pages/CardsManage'
import Activate from '../pages/ActivateNewCard'
import OrderCard from '../pages/OrderCard'
import Request from '../pages/Request'
import Cheque_Req from '../pages/ChequeRequest'
import ManageLoan from '../pages/ManageLoan';
import TransactionActivity from '../pages/Transactions';
import Recharge from '../pages/MobileRecharge';
import Help from '../pages/HelpCenter';
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
            <Route path='/bill' exact component={PayBill}/>
            <Route path='/complaint' exact component={Complaint}/>
            <Route path='/recover' exact component={Forgot}/>
            <Route path='/request_cheque' exact component={Cheque}/>
            <Route path='/cards_manage' exact component={Cards}/>
            <Route path='/activate' exact component={Activate}/>
            <Route path='/order' exact component={OrderCard}/>
            <Route path='/request_manage' exact component={Request}/>
            <Route path='/cheque_request' exact component={Cheque_Req}/>
            <Route path='/manageLoan' exact component={ManageLoan}></Route>
            <Route path='/transactionActivity' exact component={TransactionActivity}></Route>
            <Route path='/recharge' exact component={Recharge}></Route>
            <Route path='/help' exact component={Help}></Route>
        </Switch>
    );
}

export default Routes
