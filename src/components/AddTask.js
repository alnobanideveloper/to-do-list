import { useState } from "react"
import React from 'react';

const AddTask = ({addTask}) => {

    const[text,setText] = useState('')
    const[reminder,setReminder] = useState(false)
    const[day,setDay] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        
        if(!text){
        alert('please add a task')
        return;
        }

        addTask({text,day , reminder})

        setText('')
        setDay('')
        setReminder(false)
    }



    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input 
                type="text"
                placeholder="Add Task" 
                value={text}
                onChange={(e)=>{
                    setText(e.target.value)
                }
            }
                 />
            </div>

            <div className="form-control">
                <label>Day & Time</label>
                <input 
                type="text" 
                placeholder="Add day and time" 
                value={day}
                onChange={((e)=>{
                    setDay(e.target.value)
                })}/>
            </div> 

            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" 
                checked={reminder}
                onChange={((e)=>{
                    setReminder(e.currentTarget.checked)
                })}/>
            </div>

            <input type="submit" className='btn btn-block' value='save Task' style={{backgroundColor:'green'}}></input>
        </form>
    )
}


export default AddTask