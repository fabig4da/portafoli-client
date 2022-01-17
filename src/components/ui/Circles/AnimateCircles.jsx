import React, { useEffect, useRef } from 'react'
import './styles.scss'

export const AnimateCircles = () => {
    const ref = useRef();
    useEffect(() => {
        if (ref.current) {
            ref.current.style.top = Math.random() * (100 - 1) + 1 + '%';
            ref.current.style.left = Math.random() * (100 - 1) + 1 + '%';
            ref.current.style.animationDuration = Math.random() + 's';
        }
    }, [])
    useEffect(() => {
        let interval = setInterval(() => {
            if (ref.current)
                return ref.current.classList.toggle('an');
        }, Math.random() * (1000 - 1))
        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <div className="a-circles" ref={ref}>
        </div>
    )
}
