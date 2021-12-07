import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postRescue } from '../services'

export default function Form({setToggle}) {
    const [name, setName] = useState('')
    const [website, setWebsite] = useState('')
    const [state, setState] = useState('')
    const [contact, setContact] = useState('')
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
            <h4>Rescue Name:</h4>
            <input 
                type="text" 
                value={name} 
                name='name' 
                onChange={(e) => setName(e.target.value)}/>
            <br/>
            <h4>Website:</h4>
            <input 
                type="text" 
                value={website} 
                name='website' 
                onChange={(e) => setWebsite(e.target.value)}/>
            <br/>
            <h4>State:</h4>
            <input 
                type="text" 
                value={state} 
                name='state' 
                onChange={(e) => setState(e.target.value)}/>
            <br/>
            <h4>Email Contact:</h4>
            <input 
                type="text" 
                value={contact} 
                name='contact' 
                onChange={(e) => setContact(e.target.value)}/> 
            <br/>
            <button>Add Rescue</button>
        </form>
    )
}
