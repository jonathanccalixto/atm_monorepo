import React, { useCallback } from 'react'

import { useAuth } from '../../contexts/AuthContext'

import { Button, Container, Link } from './styles'

const Dashboard = () => {
  const { signOut, user } = useAuth()

  const handleSignOut = useCallback(
    async event => {
      event.preventDefault()

      signOut()
    },
    [signOut],
  )

  return (
    <Container>
      <form>
        <span>Welcome {user.name}!</span>

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
          Transfer
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
