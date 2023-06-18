import { useHabitContext } from "./HabitContext"

const Home = () => {
  const {habits, habitDetails} = useHabitContext()
  console.log(habits)
  console.log(habitDetails)

  return (
    <div>
      <h1>your habits</h1>
      {/* <p>{habitDetails?.habitName}</p> */}
      <ul>
        {habits?.length > 0 && (
          habits?.map(({habitName}, index) => {
            return <li key={index}>{habitName}</li>
          })
        )}
      </ul>
    </div>
  )
}

export default Home