import Task from "./Task"
import React from 'react';


const Tasks = ({tasks , onDelete,onToggle}) => {
    return (
        <>
           {
                tasks.length > 0 ?
                tasks.map((task) => 
                    <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
                ):
                <h2 style={{color:'red'}}>No Tasks</h2>

            }
        </>
    )
}


export default Tasks