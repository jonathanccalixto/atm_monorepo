import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'

import Layout from './components/Layout'
import { AuthProvider } from './contexts/AuthContext'

import GlobalStyles from './sytles/global'

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <Layout>
        <Routes />
      </Layout>

      <GlobalStyles />
    </AuthProvider>
  </BrowserRouter>
)

export default App
