import React from 'react'
import './List.css'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function List({dataList, selector}) {

    const [renderList, setRenderList] = useState([])

    useEffect(() => {
        if(selector !== ''){
            setRenderList(dataList.filter(item => item.fields.state === selector))
        }
    }, [selector])

    return (
        <div>
            {renderList.map((item) => (
                <div className="container">
                    <p>{item?.fields?.name}</p>
                    <p>{item?.fields?.contact}</p> 
                    <p>{item?.fields?.website}</p>                                                           
                </div>
            ))}
        </div>
    )
}
