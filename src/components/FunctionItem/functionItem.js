import React,{ useReducer, useState } from 'react';

import './functionItem.css'
import { allFunctioms } from '../../config/constants/allFunctions';
import { getFunctionParamsObj } from '../../utils/getFuncParamsObj';

const FunctionItem = ({funcName}) => {

    const functionToAdd = allFunctioms[funcName];
    const funcDefaultValues = getFunctionParamsObj(functionToAdd.length);
    const [result,setResult] = useState(null)

    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            ...funcDefaultValues
        }
      );

    const handleChange = event => {
        const name = event.target.name;
        const newValue = parseInt(event.target.value);
        setUserInput({[name]: newValue});
    }

    const handleCount = ()=>{
          setResult(functionToAdd(...Object.values(userInput)));
    }

    const inputsList = Object.keys(funcDefaultValues).map(item=>(
        <>
        <label >{item}</label>
        <input type='text' name={item} value={userInput[item]} onChange={handleChange}/>
        </>
    ));

    return(
        <div className='funcItemWrapper'>
            <h2>{funcName}</h2>
            {inputsList}
            <h3>Result: {result}</h3>
            <button onClick={handleCount}>count</button>
        </div>)
}

export default FunctionItem;