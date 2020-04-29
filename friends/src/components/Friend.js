import React, { useEffect, useState } from 'react'
import { axiosAuth } from '../utils/axiosAuth'

export const Friend = () => {

    const [ newFriend, setNewFriend ] = useState({
        name: '',
        age: '',
        email: ''
    })

    const [ data, setData ] = useState([])
    
    useEffect(() => {
        axiosAuth()
        .get('/friends')
        .then(res => {
            setData(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const friendAdd = {...newFriend, id: data.length+1 }
        axiosAuth()
        .post('/friends', friendAdd)
        .then(console.log(data))
        .catch(err => console.log(err))

        setNewFriend({
            id: '',
            name: '',
            age: '',
            email: ''
        })
        window.location.reload();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='name'
                    value={newFriend.name}
                    placeholder='Name of your friend'
                    onChange={handleChange}
                />
                <input 
                    type='number'
                    name='age'
                    value={newFriend.age}
                    placeholder='Age of your friend'
                    onChange={handleChange}
                />
                <input 
                    type='email'
                    name='email'
                    value={newFriend.email}
                    placeholder='Email of your friend'
                    onChange={handleChange}
                />
                <button>Add!</button>
            </form>

            <ul>
                {data.map(friend => {
                    return (
                        <li key={friend.id}>{friend.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}