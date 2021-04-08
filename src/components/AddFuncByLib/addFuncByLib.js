import React,{useState} from 'react';

import './addFuncByLib.css';
import SelectInput from '../SelectInput/index';
import {functionsEnumMomentJs} from '../../config/constants/functionsEnum';
import { swapFunctionEnum } from '../../utils/swapFunctionEnum';


const AddFuncByLib = ()=> {

    const [funcObj,setfunc] = useState(functionsEnumMomentJs);

    const OnChangeSelect = (event) =>
    {
        if(event.target.value==='momentJs'|| event.target.value==='dateFns'){
             const newFunctionsEnum = swapFunctionEnum(event.target.value);
             setfunc(newFunctionsEnum);
        }
        else{
        }
    }

    const selectItems = funcObj.map(item=>(
        <SelectInput label={item.label} values={item.values} OnChangeSelect={OnChangeSelect}/>
    ))
    return(
        <div>
        <h2>
            Add function
        </h2>
        <form onSubmit={null}>
            <div className='selectWrapper'>
                {selectItems}
                <input className='submit' value={'Ok'} type="submit"></input>
            </div>
        </form>
        </div>
    )
}

export default AddFuncByLib;