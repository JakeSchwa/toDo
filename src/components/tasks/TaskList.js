import React, {useEffect, useState} from 'react'



const TaskList = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        getTasks()
    },[])

    const getTasks = async () =>{
        console.log("Inside getTasks")
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()
        console.log(data)
        setData(data)
    }

    const displayTasks = () => {
        return data.map(item => 
            <li className={item.id}>{item.description}</li>
        )
    }

    return (
        <div id="taskList">
            <ul className="collection with-header">
                <li className="collection-header"><h4 className="center">Tasks</h4></li>
                {displayTasks()}
            </ul>
        </div>
    )
}

export default TaskList
