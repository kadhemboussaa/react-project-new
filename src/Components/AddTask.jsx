import React, { useRef } from 'react'
import './addtask.css'
const AddTask = ({tasks,setTasks}) => {
  const taskRef = useRef();
  const dateRef = useRef();
  const handleSubmit= (e)=>{
    e.preventDefault();
    const newTask = {
      title: taskRef.current?.value,
      date: dateRef.current?.value
    }
    if (!(newTask.title==="" || newTask.date==="")){
      setTasks([...tasks,newTask])
      taskRef.current.value = ''
      dateRef.current.value = ''
    }
  }
  return (
    <form className='add-task-form' onSubmit={(e)=>handleSubmit(e)}>
        <label htmlFor="task">Task: <br />
        <input type="text" name='task'id='task-field' ref={taskRef}/>
        </label>
        <label htmlFor="date">Date: <br />
        <input type="date" name='date' id='date'ref={dateRef}/>
        </label>
        <button>Add Task</button>
    </form>
  )
}

export default AddTask