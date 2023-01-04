import React from 'react'
import './tasks.css'
import Task from './Task.jsx' 
const Tasks = ({tasks,deleteTask}) => {
  return (
    <section className='tasks-container'>
      {tasks.map((task,index)=><Task key={index} task={task} id={index} deleteTask={deleteTask} />) }
    </section>
  )
}

export default Tasks