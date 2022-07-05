import { useState } from 'react'

//functional component that adds a task
const AddTask = ({ onAdd }) => {
    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    // const [reminder, setReminder] = useState(false)


    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert("Please add a task")
            return
        }

        onAdd({ text, day })

        // update the state

        setText("")
        setDay("")
        // setReminder(false)
    }

    // the react ui

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Date and Time</label>
                <input type='text' placeholder='Add Date, Time' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            {/* <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div> */}

            <input type="submit" value='Save Task' className="btn btn-save" />
        </form>
    )
}

export default AddTask