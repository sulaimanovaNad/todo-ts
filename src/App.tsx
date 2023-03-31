import './App.css';
import React, { FC, ChangeEvent, useState } from 'react';
import {ITask} from './interface'
import TodoTask from './component/TodoTask'


const App: FC = () => {

  const [task, setTask] = useState<string>('')
  const [todoList, setTodoList] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === 'task'){
      setTask(event.target.value)
    }
  }

  const AddTask = (): void => {
    const newTask = {taskName:task}
    setTodoList([...todoList,newTask])
    setTask('')
  }

  const DeleteTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName != taskNameToDelete
    }))
  }

  return (
    <div>
      <div className="header">
        <div className="inputs">
        <input
          type="text"
          name='task'
          value={task}
          placeholder='Task'
          onChange={handleChange} />
        </div>
        <button className='btn-add' onClick={AddTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task:ITask,key:number) => {
          return <TodoTask key={key} task={task} DeleteTask={DeleteTask}/>
        })}
      </div>
    </div>
  );
}

export default App;
