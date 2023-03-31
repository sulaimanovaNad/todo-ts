import React, {FC} from 'react'
import { ITask } from '../interface'

interface Props {
    task:ITask;
    DeleteTask(taskNameToDelete:string): void;
}

const TodoTask = ({task,DeleteTask}: Props) => {
  return (
    <div className='todotask'>
        <div className="taskcontent">
            <div className="taskName">{task.taskName}</div>
        </div>
        <button className='btn-delete' onClick={() => DeleteTask(task.taskName)}>x</button>
    </div>
  )
}
export default TodoTask