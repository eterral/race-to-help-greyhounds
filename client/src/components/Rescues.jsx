import React from 'react'
import {grabRescues} from '../services'
import { useEffect,useState } from 'react'
import List from './List'

export default function Rescues({states, rescues}) {

    const [selector, setSelector] = useState('')

    return (
        <div>
            <h2>Find a Local Rescue</h2>
            <br/>
            <br/>
            <select id="state-selector" onChange={(e) => setSelector(e.target.value)}>
                <option selected disabled hidden>Choose State</option>
                {states.map((state) => (
                    <option value={state}>{state}</option>
                ))}
            </select>
            <List dataListç={rescues} selector={selector} />
        </div>
    )
}
