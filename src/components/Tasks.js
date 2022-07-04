import Task from './Task'

// pass in the tasks props

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (

        <>
            {tasks.map((task, index) => (
                <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
            )
            )}

        </>
    )
}

export default Tasks