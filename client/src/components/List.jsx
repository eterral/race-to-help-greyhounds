import React from 'react'
import {useState, useEffect} from 'react'

export default function List({rescues, selector}) {

    const [renderList, setRenderList] = useState([])

    useEffect(() => {
        if(selector != ''){
            setRenderList(rescues.filter(rescue => rescue.fields.state === selector))
        }
    }, [selector])

    return (
        <div>
            {renderList.map((item) => (
                <div>
                    <p>{item?.fields?.name}</p>
                    <p>{item?.fields?.website}</p>
                    <p>{item?.fields?.contact}</p>                                                            
                </div>
            ))}
        </div>
    )
}
