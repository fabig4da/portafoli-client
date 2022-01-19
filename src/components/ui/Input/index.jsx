import React, { useEffect, useRef, useState } from 'react'
import { inputReducer } from '../../../Redux/reducers/inputReducer';

export const InputText = ({ name, label, parseInput, type }) => {
    const [value, setValue] = useState({ val: '', ok: undefined });
    const ref = useRef();

    useEffect(() => {
        parseInput({
            name,
            value: value.val,
            ok: value.ok
        })
        chageClase(ref,value.ok);
    }, [value])


    const focusClasses = () => {
        ref.current.classList.add(clases.labelUp)
    }


    const blurClasses = () => {
        if (!value.val)
            ref.current.classList.remove(clases.labelUp)

    }

    const hadelChange = ({ target: { value } }) => {
        setValue({ val: value, ok: validated(value) })

    }

    const validated = (value) => {
        if (inputReducer(type, value))
            return true;
        else
            return false
    }

    const chageClase = (ref, ok) => {
        if(ok === undefined)
            return
        if (ok) {
            ref.current.classList.add(clases.inputOk)
            ref.current.classList.remove(clases.inputWrong)
        }
        else {
            ref.current.classList.remove(clases.inputOk)
            ref.current.classList.add(clases.inputWrong)
        }
    }


    return (
        <div className={clases.inputCotainer} ref={ref}>


            <label htmlFor={name}>{label}</label>


            <input
                type={type}
                value={value.val}
                name={name}
                id={name}
                onFocus={focusClasses}
                onBlur={blurClasses}
                onChange={hadelChange}
            />
            {
                value.ok ? <i className="fa fa-check ik"></i> : <i className="fa fa-times iw"></i>
            }


        </div>
    )
}



export const clases = {
    inputCotainer: 'input-container',
    inputOk: 'input-ok',
    inputWrong: 'input-wrong',
    labelUp:'label-up'
}