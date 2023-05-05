import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({item,handlecheck,handledelete}) => {
  return (
    <li className='item' key={item.id}>
    <input 
    type="checkbox" 
    checked={item.checked}
    onChange={
        ()=>handlecheck(item.id)
    }
    />
    <label
    style={(item.checked)?{
        textDecoration:'line-through'
    }:null}
     onDoubleClick={()=>handlecheck(item.id)}
    >
        {item.item}
    </label>
    <FaTrashAlt 
    onClick={()=> handledelete(item.id)}
    role='button' 
    tabIndex='0'
    aria-label={`delete ${item.item}`}
        />
</li>
  )
}

export default LineItem
