import React from 'react'
import PropTypes from 'prop-types'

import { Container, Title } from './styles'

const Layout = ({ children }) => {
  return (
    <Container>
      <Title>ATM</Title>

      {children}
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
