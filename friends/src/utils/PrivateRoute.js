import React from 'react'

import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({component: Component, ...others }) => {
    const token = window.localStorage.getItem('token')

    return (
        <Route
            {...others}
            render={ props => {
                return token 
                    ? <Component {...props} />
                    : <Redirect to='/login' />
            }}
        />
    )
}