import React from 'react'
import './addbtn.css'

const AddBtn = ({hidden,setHidden}) => {
  return (
    <button id='add-btn' onClick={()=>setHidden(!hidden)}>
      {!hidden?'-':'+'}
    </button>
  )
}

export default AddBtn