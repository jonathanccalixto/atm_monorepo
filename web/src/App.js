import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'

import Layout from './components/Layout'

import GlobalStyles from './sytles/global'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes />
    </Layout>

    <GlobalStyles />
  </BrowserRouter>
)

export default App
