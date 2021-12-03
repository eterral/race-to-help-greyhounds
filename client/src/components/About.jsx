import React from 'react'
import {Link} from 'react-router-dom'

export default function About() {
    return (
        <div>
            <Link to="/rescues">Find a Rescue</Link>
            <Link to="/racetracks">Find a Racetrack</Link>
            <h2>About Race To Help Greyhounds</h2>
            <p>Race To Help Greyhounds is all about finding a local rescue to help adopt a greyhound</p>
            <p>These founds are some of the sweetest and kindest dogs, and need your help adjusting after their life of racing</p>
            <p>The life of a racer can be really hard and sometimes the hounds are treated poorly on the track or at the farms</p>
            <p>We are also a resouce to see if racing is still happening in your state and help you to try and end it</p>
        </div>
    )
}
