import React from 'react'
import { Switch, Redirect } from 'react-router-dom'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Balance from '../pages/Balance'
import Deposit from '../pages/Deposit'
import Dashboard from '../pages/Dashboard'
import Transfer from '../pages/Transfer'
import Withdraw from '../pages/Withdraw'

import Route from './Route'

const Routes = () => (
  <Switch>
    <Route path="/sign_in" component={SignIn} />
    <Route path="/sign_up" component={SignUp} />

    <Route path="/" exact component={Dashboard} isPrivate />
    <Route path="/balance" component={Balance} isPrivate />
    <Route path="/deposit" component={Deposit} isPrivate />
    <Route path="/withdraw" component={Withdraw} isPrivate />
    <Route path="/transfer" component={Transfer} isPrivate />

    <Redirect to="/" />
  </Switch>
)

export default Routes
