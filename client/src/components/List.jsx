import React from 'react'
import {useState, useEffect} from 'react'

export default function List({dataList, selector}) {

    const [renderList, setRenderList] = useState([])

    useEffect(() => {
        if(selector != ''){
            setRenderList(dataList.filter(item => item.fields.state === selector))
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
