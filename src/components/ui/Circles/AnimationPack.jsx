import React, { useEffect, useState } from 'react'
import { AnimateCircles } from './AnimateCircles';

export const AnimationPack = ({cant}) => {
    const [circles, setCircles] = useState([]);
    useEffect(() => {
        let arr = [];
        for(let x=0; x<cant; x++){
            arr.push(9);
            
        }
        if(arr[cant-1])
            setCircles(arr);
        // eslint-disable-next-line
        ()=>setCircles([])
    }, [cant])

    return (
        <>
        
            {
                (circles[0]) ? circles?.map((value, index)=>{
                    return <AnimateCircles key={index+'aa'}/>
                }) : ''
                
            }
            
        </>
    )
}
