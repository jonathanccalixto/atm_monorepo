import React from 'react'
import PropTypes from 'prop-types'

import { Container, Error, Info, Success, Warning } from './styles'

const Messages = ({ error, info, success, warning }) => {
  return (
    <Container>
      {info.map((message, index) => (
        <Info key={1000 + index}>{message}</Info>
      ))}
      {warning.map((message, index) => (
        <Warning key={2000 + index}>{message}</Warning>
      ))}
      {success.map((message, index) => (
        <Success key={3000 + index}>{message}</Success>
      ))}
      {error.map((message, index) => (
        <Error key={4000 + index}>{message}</Error>
      ))}
    </Container>
  )
}

Messages.propTypes = {
  error: PropTypes.arrayOf(PropTypes.string).isRequired,
  info: PropTypes.arrayOf(PropTypes.string).isRequired,
  success: PropTypes.arrayOf(PropTypes.string).isRequired,
  warning: PropTypes.arrayOf(PropTypes.string).isRequired,
}

Messages.defaultProps = {
  error: [],
  info: [],
  success: [],
  warning: [],
}

export default Messages
