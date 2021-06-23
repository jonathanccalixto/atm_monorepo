import React, { useEffect, useMemo, useState } from 'react'

import { AccountModel } from '../../models/AccountModel'
import { useAuth } from '../../contexts/AuthContext'

import { Container, Link } from './styles'

const Balance = () => {
  const [loading, setLoading] = useState(true)
  const [value, setValue] = useState(0)

  const { user } = useAuth()

  const currency = useMemo(
    () =>
      new Intl.NumberFormat('us-US', {
        style: 'currency',
        currency: 'USD',
      }).format(value),
    [value],
  )

  const balanceClassName = useMemo(
    () => (value < 0 ? 'negative' : 'positice'),
    [value],
  )

  useEffect(() => {
    AccountModel.balance().then(([, { balance }]) => {
      setLoading(false)
      setValue(balance)
    })
  }, [])

  return (
    <Container>
      <form>
        {loading ? (
          <span>Loading your balance</span>
        ) : (
          <>
            <span>Welcome {user.name}!</span>
            <span>
              Your balance is{' '}
              <strong className={balanceClassName}> {currency} </strong>
            </span>
          </>
        )}

        <Link to="/" position={6} side="left">
          Back
        </Link>

        <Link to="/" position={6} side="right">
          Back
        </Link>
      </form>
    </Container>
  )
}

export default Balance
