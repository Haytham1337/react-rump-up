import React,{useRef, useState} from 'react';

import './addFuncByLib.css';
import SelectInput from '../SelectInput/index';
import DisplayFunctions from '../DisplayFunctions/index';
import { functionsEnumMomentJs } from '../../config/constants/functionsEnum';
import { swapFunctionEnum } from '../../utils/swapFunctionEnum';




const AddFuncByLib = ()=> {

    const [currentFunctions,setfunc] = useState(functionsEnumMomentJs);
    const [selectedFunct,setSelectedFunc] = useState();
    const [showHideForm,setShowHideForm] = useState(false);
    const funcToSend = useRef([])

    const OnChangeSelect = (event) =>
    {
        if(event.target.value==='momentJs'|| event.target.value==='dateFns'){
             const newFunctionsEnum = swapFunctionEnum(event.target.value);
             setfunc(newFunctionsEnum);
        }
        else{
            setSelectedFunc (event.target.value);

        }
    }

    const onNewFuncAdd = (e)=>{
        e.preventDefault();
        setShowHideForm(!showHideForm);
        funcToSend.current=[...funcToSend.current,selectedFunct]
    } 

    const inputData = currentFunctions.map(item=>(
        <SelectInput key= {item.label}label={item.label} values={item.values} OnChangeSelect={OnChangeSelect} setSelectedFunc={setSelectedFunc}/>
    ))
    return(
        <div>
            {!showHideForm&&
            <>
                <h2>
                    Add function
                </h2>
                <form onSubmit={onNewFuncAdd}>
                    <div className='selectWrapper'>
                        {inputData}
                        <input className='submit' value={'Ok'} type="submit"></input>
                    </div>
                </form>
            </>
            
            }
        {showHideForm&& <DisplayFunctions funcList={funcToSend} showForm={setShowHideForm} setDefaultFunc={setfunc}/>}
        </div>
    )
}

export default AddFuncByLib;