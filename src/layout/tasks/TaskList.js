import React, {useEffect} from 'react'

export const TaskList = () => {
    useEffect(()=>{
        getTasks()
    })

    getTasks = () =>{
        axios.get()
    }

    return (
        <div id="taskList">
            <ul className="collection with-header">
                <li className="collection-header"><h4>Tasks</h4></li>
                
            </ul>
        </div>
    )
}
