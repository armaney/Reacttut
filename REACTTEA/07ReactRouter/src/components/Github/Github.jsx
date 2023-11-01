import React from 'react'
import { useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    // const[data, setData] = useState('Loading')
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/armaney`)
    //         .then((res) => res.json())
    //         .then((res) => setData(res))
    // })
    return (
        <>
        <div className='text-center text-3xl text-green-600 m-4 p-4'>{data.login}</div>
        <div className='text-center text-3xl text-green-600 m-4 p-4 md:hover:text-blue-600'>Github Followers: {data.followers}
        <img className='rounded-xl mx-6 justify-self-center' src={data.avatar_url} alt='Git Picture' width={200}></img>
        </div>
        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/armaney')
    return response.json()
}
