import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import Api from '../../services/Api'

import { Button, Container, Link } from './styles'

const Dashboard = () => {
  const history = useHistory()

  const handleSignOut = useCallback(
    async event => {
      event.preventDefault()

      Api.setAuthorization(undefined)

      history.push('/sign_in')
    },
    [history],
  )

  return (
    <Container>
      <form>
        <span>Welcome !</span>

        <Link to="/balance" position={0} side="left">
          Balance
        </Link>

        <Link to="/deposit" position={0} side="right">
          Deposit
        </Link>

        <Link to="/Withdraw" position={3} side="left">
          Withdraw
        </Link>

        <Link to="/transfer" position={3} side="right">
          Transer
        </Link>

        <Button type="button" position={6} side="left" onClick={handleSignOut}>
          Exit
        </Button>

        <Button type="button" position={6} side="right" onClick={handleSignOut}>
          Exit
        </Button>
      </form>
    </Container>
  )
}

export default Dashboard
