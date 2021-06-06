import React, { useCallback, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Input from '../../components/Input'
import Messages from '../../components/Messages'

import { SignUpModel } from '../../models/SignUpModel'

import { Button, Container, Link } from './styles'

const SignUp = () => {
  const agencyRef = useRef()
  const accountRef = useRef()
  const nameRef = useRef()
  const passwordConfirmationRef = useRef()
  const passwordRef = useRef()

  const history = useHistory()

  const [successMessages, setSuccessMessages] = useState([])
  const [errorMessages, setErrorMessages] = useState([])

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault()

      const signUp = {
        account: accountRef.current?.getValue?.(),
        agency: agencyRef.current?.getValue?.(),
        name: nameRef.current?.getValue?.(),
        password: passwordRef.current?.getValue?.(),
        passwordConfirmation: passwordConfirmationRef.current?.getValue?.(),
      }

      const [success, , messages] = await SignUpModel.signUp({ signUp })

      if (success) {
        setSuccessMessages(messages)
        setErrorMessages([])

        history.push('/sign_in')
      } else {
        delete global.token
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
        <Input ref={nameRef} label="Name:" id="name" />
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
        <Input
          ref={passwordConfirmationRef}
          label="Confirm your password:"
          id="passwordConfirmation"
          type="password"
        />

        <Button type="submit" position={6} side="left">
          Confirm
        </Button>

        <Link to="/sign_in" position={6} side="right">
          Back
        </Link>
      </form>
    </Container>
  )
}

export default SignUp
