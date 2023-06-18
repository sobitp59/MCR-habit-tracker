import { Link, useParams } from "react-router-dom";
import { useHabitContext } from "./HabitContext";

const Home = () => {
  const {habitID} = useParams();

  const {habits, habitDetails} = useHabitContext()
  console.log(habits)
  console.log(habitDetails)

  return (
    <div>
      <h1>your habits</h1>
      {/* <p>{habitDetails?.habitName}</p> */}
      <ul>
        {habits?.length > 0 && (
          habits?.map(({habitName, id}) => {
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

export default Home