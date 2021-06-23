import React from 'react'
import { Route as OriginalRoute, Redirect } from 'react-router-dom'
import PropType from 'prop-types'

import { useAuth } from '../contexts/AuthContext'

function Route({ isPrivate, component: Component, ...rest }) {
  const { signed } = useAuth()

  return (
    <OriginalRoute
      {...rest}
      render={({ location }) => {
        if (isPrivate === signed) return <Component />

        return (
          <Redirect
            to={{
              pathname: isPrivate ? '/sign_in' : '/',
              state: { from: location },
            }}
          />
        )
      }}
    />
  )
}

Route.propTypes = {
  isPrivate: PropType.bool.isRequired,
  component: PropType.elementType.isRequired,
}

Route.defaultProps = {
  isPrivate: false,
}

export default Route
