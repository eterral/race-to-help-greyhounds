import React from 'react'
import './About.css'
import {Link} from 'react-router-dom'

export default function About() {
    return (
        <div>
            <div className="links">
                <Link to="/rescues">Find a Rescue</Link>
                <Link to="/racetracks">Find a Racetrack</Link>
            </div>
            <div className="about">
                <h2>About Race To Help Greyhounds</h2>
                <p>Race To Help Greyhounds is all about finding a local rescue to help adopt a greyhound. These founds are some of the sweetest and kindest dogs, and need your help adjusting after their life of racing. The life of a racer can be really hard and sometimes the hounds are treated poorly on the track or at the farms</p>
                <br/>
                <p>We are also a resouce to see if racing is still happening in your state and help you to try and end it</p>
            </div>
        </div>
    )
}
