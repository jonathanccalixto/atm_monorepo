import React, { createContext, useContext, useState, useCallback } from 'react'
import PropTypes from 'prop-types'

import { SignInModel } from '../models/SignInModel'
import Api from '../services/Api'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(() => {
    const token = localStorage.getItem('atm-monorepo:token')
    const user = localStorage.getItem('atm-monorepo:user')

    Api.setAuthorization(token)

    if (token && user) return { token, user: JSON.parse(user) }

    return { token: '', user: {} }
  })

  const signIn = useCallback(async (agency, account, password) => {
    const [success, { token, account: user = {} }, messages] =
      await SignInModel.signIn({
        signIn: { agency, account, password },
      })

    if (success) {
      setSession({ token, user })

      localStorage.setItem('atm-monorepo:token', token)
      localStorage.setItem('atm-monorepo:user', JSON.stringify(user))

      Api.setAuthorization(token)

      return [success, {}, messages]
    } else {
      return [success, {}, messages]
    }
  }, [])

  const signOut = useCallback(() => {
    setSession({ token: '', user: {} })

    localStorage.setItem('atm-monorepo:token', '')
    localStorage.setItem('atm-monorepo:user', JSON.stringify({}))

    Api.setAuthorization('')
  }, [])

  return (
    <AuthContext.Provider
      value={{ signed: !!session.token, user: session.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node,
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) throw new Error('useAuth must be used within and AuthProvider')

  return context
}
