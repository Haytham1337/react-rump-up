import React,{useState} from 'react';

import './displayFunctions.css';
import FunctionItem from '../FunctionItem/index';
import  { functionsEnumMomentJs } from '../../config/constants/functionsEnum';
 
const DisplayFunctions = ({funcList,showForm,setDefaultFunc}) => {

    const [filteredList,setFilterList] = useState(funcList.current);

    const functionsItemList = filteredList.map((item,index)=>(
        <FunctionItem key={index} funcName={item}  />
    ))

    const onBntClick = () =>{
        setDefaultFunc(functionsEnumMomentJs)
        showForm(false)
    }

    const handleFilterChange = (e) => {
        setFilterList(funcList.current.filter(item => item.toLowerCase().includes(e.target.value.toLocaleLowerCase())));
    }
    
    return(
        <div>
            <h1>Function list:</h1>
            <input  type='text' className='searchBar' onChange={handleFilterChange}></input>
            <div className="funcListWrapper">
            {functionsItemList}
            </div>
            <button className="addNewFuncBnt" onClick={onBntClick}>+</button>
        </div>
    )
}

export default DisplayFunctions;