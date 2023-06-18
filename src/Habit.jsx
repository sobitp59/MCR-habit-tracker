import { useState } from 'react';
import { useHabitContext } from './HabitContext';
import HabitForm from './HabitForm';

const Habit = () => {
  const [showForm, setShowForm] = useState(false)
  const data = useHabitContext();
  console.log(data)

  return (
    <div>
        <button onClick={() => setShowForm(true)}>+ create a habit</button>
        {showForm && <HabitForm/> }
    </div>
  )
}

export default Habit