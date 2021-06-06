import React, { useCallback, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Input from '../../components/Input'
import Messages from '../../components/Messages'

import { SignInModel } from '../../models/SignInModel'
import Api from '../../services/Api'

import { Button, Container, Link } from './styles'

const SignIn = () => {
  const agencyRef = useRef()
  const accountRef = useRef()
  const passwordRef = useRef()

  const history = useHistory()

  const [successMessages, setSuccessMessages] = useState([])
  const [errorMessages, setErrorMessages] = useState([])

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault()

      const signIn = {
        account: accountRef.current?.getValue?.(),
        agency: agencyRef.current?.getValue?.(),
        password: passwordRef.current?.getValue?.(),
      }

      const [success, { token }, messages] = await SignInModel.signIn({
        signIn,
      })

      if (success) {
        Api.setAuthorization(token)

        setSuccessMessages(messages)
        setErrorMessages([])

        history.push('/')
      } else {
        setSuccessMessages([])
        setErrorMessages(messages)
      }
    },
    [history],
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
