import React from 'react';

import './selectInput.css';


const SelectInput = ({label,values,OnChangeSelect})=> {
    const optionsList = values.map(item=>(
        <option  key={item} value={item}>{item}</option>
    ))
    return(<>
           <label className='label' >{label}</label>
            <select  className='selectInput' id={label} onChange={OnChangeSelect}>
                {optionsList}
            </select>
            </> 
    )
}

export default SelectInput;