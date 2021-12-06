import React from 'react'
import {useState} from 'react'
import List from './List'

export default function Racetracks({racetracks, states}) {

    const [selector, setSelector] = useState('')

    return (
        <div>
            <h2>Find out if there is a racetrack near you</h2>
            <br/>
            <br/>
            <select id="state-selector" onChange={(e) => setSelector(e.target.value)}>
                <option selected disabled hidden>Choose State</option>
                {states.map((state) => (
                    <option value={state}>{state}</option>
                ))}
            </select>
            <List dataList={racetracks} selector={selector} />
        </div>
    )
}
