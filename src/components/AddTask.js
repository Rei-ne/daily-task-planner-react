import { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

//functional component that adds a task
const AddTask = ({ onAdd }) => {
    const [text, setText] = useState("")
    const [selectedDate, setSelectedDate] = useState(null)



    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert("Please add a task")
            return
        }

        onAdd({ text, selectedDate })

        // update the state

        setText("")
        setSelectedDate(null)

    }

    // the react ui

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control datepicker">
                <label>Date</label>
                <DatePicker
                    selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    placeholderText={'dd/mm/yyyy'}
                    filterDate={date => date.getDay() !== 6 && date.getDay() !== 0} // weekends cancel
                    showYearDropdown // year show and scrolldown alos
                />
            </div>

            <input type="submit" value='Save Task' className="btn btn-save" />
        </form>
    )
}

export default AddTask