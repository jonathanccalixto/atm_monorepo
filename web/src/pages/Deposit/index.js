import React, { useCallback, useRef, useState } from 'react'

import Input from '../../components/Input'
import Messages from '../../components/Messages'

import { AccountModel } from '../../models/AccountModel'

import { Button, Container, Link } from './styles'

const Deposit = () => {
  const valueRef = useRef()

  const [successMessages, setSuccessMessages] = useState([])
  const [errorMessages, setErrorMessages] = useState([])

  const handleSubmit = useCallback(async event => {
    event.preventDefault()

    if (!valueRef.current) return

    const value = Number(valueRef.current.getValue().replace(',', ''))

    const deposit = { value }

    const [success, , messages] = await AccountModel.deposit({ deposit })

    if (success) {
      setSuccessMessages(messages)
      setErrorMessages([])

      valueRef.current.setValue('')
      valueRef.current.focus()
    } else {
      setSuccessMessages([])
      setErrorMessages(messages)
    }
  }, [])

  return (
    <Container>
      <Messages success={successMessages} error={errorMessages} />

      <form onSubmit={handleSubmit}>
        <Input ref={valueRef} label="Value:" id="value" mask="currency" />

        <Button type="submit" position={6} side="left">
          Confirm
        </Button>

        <Link to="/" position={6} side="right">
          Back
        </Link>
      </form>
    </Container>
  )
}

export default Deposit
