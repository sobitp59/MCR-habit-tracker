import { Link } from "react-router-dom"
import { useHabitContext } from "./HabitContext"

const Archive = () => {
    const {archiveHabits} = useHabitContext()
  return (
    <div>
        <h1>Archive habits</h1>
        <ul>
        {archiveHabits?.length > 0 && (
          archiveHabits?.map(({habitName, id}) => {
            return <li key={id}>
                  <Link to={`/habit/${id}`}>
                    <h1>{habitName}</h1>
                  </Link>
              </li>
          })
        )}
      </ul>
    </div>
  )
}

export default Archive