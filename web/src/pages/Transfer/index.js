import React, { useCallback, useRef, useState } from 'react'

import Input from '../../components/Input'
import Messages from '../../components/Messages'

import { AccountModel } from '../../models/AccountModel'

import { Button, Container, Link } from './styles'

const Transfer = () => {
  const agencyRef = useRef()
  const accountRef = useRef()
  const valueRef = useRef()

  const [successMessages, setSuccessMessages] = useState([])
  const [errorMessages, setErrorMessages] = useState([])

  const handleSubmit = useCallback(async event => {
    event.preventDefault()

    if (!agencyRef.current || !accountRef.current || !valueRef.current) return

    const value = Number(valueRef.current.getValue().replace(',', ''))

    const transfer = {
      agency: agencyRef.current.getValue(),
      account: accountRef.current.getValue(),
      value,
    }

    const [success, , messages] = await AccountModel.transfer({ transfer })

    if (success) {
      setSuccessMessages(messages)
      setErrorMessages([])

      agencyRef.current.setValue('')
      agencyRef.current.focus()
      accountRef.current.setValue('')
      valueRef.current.setValue('')
    } else {
      setSuccessMessages([])
      setErrorMessages(messages)
    }
  }, [])

  return (
    <Container>
      <Messages success={successMessages} error={errorMessages} />

      <form onSubmit={handleSubmit}>
        <Input ref={agencyRef} label="Agency:" id="agency" mask="9999" />
        <Input
          ref={accountRef}
          label="Account:"
          id="account"
          mask="9999999-9"
        />
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

export default Transfer
