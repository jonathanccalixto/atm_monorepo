import React, { useCallback, useRef, useState } from 'react'

import { useAuth } from '../../contexts/AuthContext'

import Input from '../../components/Input'
import Messages from '../../components/Messages'

import { Button, Container, Link } from './styles'

const SignIn = () => {
  const agencyRef = useRef()
  const accountRef = useRef()
  const passwordRef = useRef()

  const { signIn } = useAuth()

  const [successMessages, setSuccessMessages] = useState([])
  const [errorMessages, setErrorMessages] = useState([])

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault()

      const [success, , messages] = await signIn(
        agencyRef.current?.getValue?.(),
        accountRef.current?.getValue?.(),
        passwordRef.current?.getValue?.(),
      )

      if (!success) {
        setSuccessMessages([])
        setErrorMessages(messages)
      }
    },
    [signIn],
  )

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
        <Input
          ref={passwordRef}
          label="Password:"
          id="password"
          type="password"
        />

        <Button type="submit" position={6} side="left">
          Confirm
        </Button>

        <Link to="/sign_up" position={6} side="right">
          Sign Up
        </Link>
      </form>
    </Container>
  )
}

export default SignIn
