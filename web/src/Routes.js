import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Balance from './pages/Balance'
import Deposit from './pages/Deposit'
import Dashboard from './pages/Dashboard'
import Transfer from './pages/Transfer'
import Withdraw from './pages/Withdraw'

const Routes = () => (
  <Switch>
    <Route path="/login" component={SignIn} />
    <Route path="/signup" component={SignUp} />

    <Route path="/" component={Dashboard} />
    <Route path="/balance" component={Balance} />
    <Route path="/deposit" component={Deposit} />
    <Route path="/withdraw" component={Withdraw} />
    <Route path="/Tranfer" component={Transfer} />

    <Redirect to="/" />
  </Switch>
)

export default Routes
