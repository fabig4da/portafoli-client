import { useEffect, useState } from 'react'

export const useInputs = () => {
    const [values, setValues] = useState([]);
    const [inputOk, setInputOk] = useState([]);;
    const [data, setData] = useState({});

    useEffect(() => {
        let inputs = inputAllOk();
        if (inputs.includes(false) || inputs.includes(undefined))
            setInputOk(false)
        else
            setInputOk(true)
            getData();
    }, [values])

    const parseInput = (input) => {
        let arr = [...values];
        let index = arr.findIndex(obj => obj.name === input.name);
        if (index >= 0) {
            arr[index] = input;
            setValues(arr);
        } else {
            setValues((val) => [...val, input])
        }
    }

    const inputAllOk = () => values.map(value => value.ok);
    const getData = () => values.map(({name, value}) =>setData((dat)=>parseObject(dat, name, value)))
    const parseObject = (data, name, value) =>{
        return {...data, [name]:value};
    }



    return { data, parseInput, inputOk }
}