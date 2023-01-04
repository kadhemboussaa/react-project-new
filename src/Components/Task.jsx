import React, { useState } from 'react'
import './task.css'
const 

Task = ({task}) => {
  const [deleted,setDeleted]=useState(false)
  return (
    deleted ? '' :
    <section className='task'>
    <div className='title-date'>
      <h1>{task.title}</h1>
      <p>{task.date}</p>
    </div>
      <button className='del-btn' onClick={()=>setDeleted(true)}>-</button>
  </section>
  )
}

export default Task