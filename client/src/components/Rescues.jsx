import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import List from './List'

export default function Rescues({states, rescues}) {

    const [selector, setSelector] = useState('')

    return (
        <div>
            <h2>Find a Local Rescue</h2>
            <br/>
            <Link to="/rescues/add">Add a Rescue</Link>
            <br/>
            <select id="state-selector" onChange={(e) => setSelector(e.target.value)}>
                <option selected disabled hidden>Choose State</option>
                {states.map((state) => (
                    <option value={state}>{state}</option>
                ))}
            </select>
            <List dataList={rescues} selector={selector} />
        </div>
    )
}
