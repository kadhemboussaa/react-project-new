import React, {useState} from 'react'
import AddBtn from './Components/AddBtn'
import AddTask from './Components/AddTask'
import Tasks from './Components/Tasks.jsx'


function App() {
  const [hidden,setHidden]= useState(true);
  const [tasks,setTasks]=useState([
    {
      "title":"wake up early",
      "date":"03-01-2022"
    }
  ])
  return (
   <section>
    <section className='heading'>
      <h1>TO DO</h1>
      <AddBtn hidden={hidden} setHidden={setHidden} />
    </section>
    {hidden?'':
    <section className='form'>
      <AddTask tasks={tasks} setTasks={setTasks} />
    </section>}
    <section className='tasks-todo'>
      <Tasks tasks={tasks} />
    </section>
   </section>
  )
}

export default App
