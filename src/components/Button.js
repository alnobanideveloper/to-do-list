import React from 'react';

const Button = ({color , name="ADD" ,onAdd , textColor})=>{
    return (
    <button className="btn" 
    style={{backgroundColor:color , color:textColor}} 
    onClick={onAdd}> 
    {name} 
    </button>
    )
}


export default Button