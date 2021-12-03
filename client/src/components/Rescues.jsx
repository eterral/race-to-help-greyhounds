import React from 'react'
import {getRescues} from '../services'
import { useEffect,useState } from 'react'

export default function Rescues() {
    const [rescues, setRescues] = useState([])

    useEffect(() => {
        const getAllRescues = async () => {
            const response = await grabRescues();
            setRescues(response);
        };
        getAllRescues();
    }, []);
    return (
        <div>
            <h2>Find a Local Rescue</h2>
            <br/>
            <br/>
            <select id="state-selector">
                <option selected disabled hidden>Choose State</option>
                {rescues.map((rescue) => {
                    <option value={rescue.fields.state}>
                })}
            </select>
        </div>
    )
}
