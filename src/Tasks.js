import React from 'react'

const Tasks = (props) => {
    return (
        <div className="card tasks">
            {   
                props.tasks.map((task) =>
                    <div className="single-task" key={task}>
                        <h4>{task}</h4>
                        <a 
                        onClick={(e) => {
                        props.deleteTask(task);
                        }}
                        >
                            <i className="fa fa-close"></i>
                        </a>
                    </div>
                )
            }
        </div>
    )
}

export default Tasks