import React from 'react';

import './displayFunctions.css';
import FunctionItem from '../FunctionItem/index';
import {functionsEnumMomentJs} from '../../config/constants/functionsEnum';

const DisplayFunctions = ({funcList,showForm,setDefaultFunc}) => {

    const functionsItemList = funcList.current.map((item,index)=>(
        <FunctionItem key={index} funcName={item}  />
    ))

    const onBntClick = () =>{
        setDefaultFunc(functionsEnumMomentJs)
        showForm(false)
    }

    return(
        <div>
            <h1>Function list:</h1>
            <div className="funcListWrapper">
            {functionsItemList}
            </div>
            <button className="addNewFuncBnt" onClick={onBntClick}>+</button>
        </div>
    )
}

export default DisplayFunctions;