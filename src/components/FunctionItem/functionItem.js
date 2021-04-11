import React ,{ useReducer }from 'react';

import './functionItem.css'
import { allFunctioms } from '../../config/constants/allFunctions';
import { getFunctionParamsObj } from '../../utils/getFuncParamsObj';



const FunctionItem = ({funcName}) => {

    const functionToAdd = allFunctioms[funcName];
    const funcDefaultValues = getFunctionParamsObj(functionToAdd.length);

    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            ...funcDefaultValues
        }
      );
      const handleChange = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setUserInput({[name]: newValue});
      }

      const handleCount = ()=>{

      }


    const inputsList = Object.keys(funcDefaultValues).map(item=>(
        <>
        <label >{item}</label>
        <input type='text' name={item} value={userInput[item]} onChange={handleChange}></input>
        </>
    ));

    return(
        <div className='funcItemWrapper'>
            <h2>{funcName}</h2>
            {inputsList}
            <h3>Result: {functionToAdd(...Object.keys(userInput))}</h3>
            <button onClick={handleCount}>count</button>
        </div>)
}

export default FunctionItem;