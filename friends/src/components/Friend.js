import React, { useEffect, useState } from 'react'
import { axiosAuth } from '../utils/axiosAuth'

export const Friend = () => {

    const [ data, setData ] = useState([])
    
    useEffect(() => {
        axiosAuth()
        .get('/friends')
        .then(res => {
            setData(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    console.log(data)

    return (
        <div>
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