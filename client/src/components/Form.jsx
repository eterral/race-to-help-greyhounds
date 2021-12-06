import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Form() {
    const [name, setName] = useState('')
    const [name, setWebsite] = useState('')
    const [name, setState] = useState('')
    const [name, setContact] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newRescue = {
            name,
            website,
            state,
            contact
        }
        setToggle(prevToggle => !prevToggle)
        await postRescue(newRescue)
        navigate('/')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={name} 
                name='name' 
                onChange={(e) => setName(e.target.value)}/>
            <input 
                type="text" 
                value={website} 
                name='website' 
                onChange={(e) => setWebsite(e.target.value)}/>
            <input 
                type="text" 
                value={state} 
                name='state' 
                onChange={(e) => setState(e.target.value)}/>
            <input 
                type="text" 
                value={contact} 
                name='contact' 
                onChange={(e) => setContact(e.target.value)}/> 
            <button>Add Rescue</button>
        </form>
    )
}
