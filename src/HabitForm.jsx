import { useHabitContext } from "./HabitContext"

const HabitForm = () => {
    const {handleHabitChange, handleHabitRepeatChange, handleHabitGoalChange, handleHabitTimeChange, handleHabitStartDateChange, handleFormSubmit} = useHabitContext()
  return (
    <div>
        <h2>new habit</h2>
        <form className="habitform">
            <label>
                name
                <input type="text" onChange={handleHabitChange}/>
            </label>

            <label>
                repeat
                <select onChange={handleHabitRepeatChange}>
                    <option value="daily">daily</option>
                    <option value="weekly">weekly</option>
                    <option value="monthly">monthly</option>
                </select>
            </label>

            <label>
                goal
                <select onChange={handleHabitGoalChange}>
                    <option value="1 times daily">1 times daily</option>
                    <option value="2 times daily">2 times daily</option>
                    <option value="3 times daily">3 times daily</option>
                    <option value="4 times daily">4 times daily</option>
                    <option value="5 times daily">5 times daily</option>
                </select>
            </label>

            <label>
                time of the day
                <select onChange={handleHabitTimeChange}>
                    <option value="any time">any time</option>
                    <option value="morning">morning</option>
                    <option value="noon">noon</option>
                    <option value="evening">evening</option>
                    <option value="night">night</option>
                </select>
            </label>

            <label>
                start date
                <input type="date" onChange={handleHabitStartDateChange}/>
            </label>

        </form>
        <div>
            <button onClick={handleFormSubmit}>save</button>
            <button>discard</button>
        </div>
    </div>
  )
}

export default HabitForm