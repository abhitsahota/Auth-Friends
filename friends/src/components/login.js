import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosAuth } from '../utils/axiosAuth'

export const Login = props => {
    const [creds, setCreds] = useState({
        username: '',
        password: ''
    })

    const history = useHistory()

    const handleChange = e => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }

    const loginAction = e => {
        e.preventDefault();
        axiosAuth()
        .post('/login', creds)
        .then(res => {
            console.log(res)
            window.localStorage.setItem('token', res.data.payload)
            history.push('/friend')
        })
        .catch(err => console.log(err))

    }

    return (
        <form onSubmit={loginAction}>
            <input 
                type='text'
                name='username'
                value={creds.username}
                onChange={handleChange}
                placeholder='username'
            />

            <input 
                type='password'
                name='password'
                value={creds.password}
                onChange={handleChange}
                placeholder='password'
            />
            <button>Submit</button>
        </form>
    )
}