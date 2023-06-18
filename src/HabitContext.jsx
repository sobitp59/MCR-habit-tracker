import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const HabitContext = createContext()

const HabitContextProvider = ({children}) => {
    const [habits, setHabits] = useState([]);
    
    const [habitDetails, setHabitDetails] = useState({
        habitName : 'habit name',
        habitRepeat : 'daily',
        habitGoal : '1 times daily',
        habitTime : 'any time',
        habitStartDate : 'today',
    })


    const handleHabitChange = (e) => {
        setHabitDetails((prev) =>  ({...prev, habitName : e?.target?.value}))
    }

    const handleHabitRepeatChange = (e) => {
        setHabitDetails((prev) =>  ({...prev, habitRepeat : e?.target?.value}))
    }
    
    const handleHabitGoalChange = (e) => {
        setHabitDetails((prev) =>  ({...prev, habitGoal : e?.target?.value}))
    }
    
    const handleHabitTimeChange = (e) => {
        setHabitDetails((prev) =>  ({...prev, habitTime : e?.target?.value}))
    }
    
    const handleHabitStartDateChange = (e) => {
        setHabitDetails((prev) =>  ({...prev, habitStartDate : e?.target?.value}))
    }

    const handleFormSubmit = (e) => {
        console.log(uuidv4());
        e.preventDefault();
        setHabits((prev) => [...prev, {...habitDetails, id : uuidv4()}]);
    }

    const value = {
        habits,
        habitDetails,
        handleHabitChange,
        handleHabitRepeatChange,
        handleHabitGoalChange,
        handleHabitTimeChange,        
        handleHabitStartDateChange,
        handleFormSubmit
    }

    return(
        <HabitContext.Provider value={value}>
            {children}
        </HabitContext.Provider>
    )
}

const useHabitContext = () => useContext(HabitContext)


export { HabitContextProvider, useHabitContext };

