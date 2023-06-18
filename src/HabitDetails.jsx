import React from 'react';
import { useParams } from 'react-router-dom';
import { useHabitContext } from './HabitContext';

const HabitDetails = () => {
    const {habitID} = useParams();
    const {habits} = useHabitContext();

    const habit = habits?.find(({id}) => id === habitID)
    const {habitName, habitRepeat, habitGoal, habitTime, habitStartDate} = habit;

  return (
    <div>
        <h1>habit details</h1>
        <p><strong>habit name : </strong> {habitName} </p>
        <p><strong>habit repeat : </strong> {habitRepeat} </p>
        <p><strong>habit goal : </strong> {habitGoal} </p>
        <p><strong>habit time : </strong> {habitTime} </p>
        <p><strong>habit start date : </strong> {habitStartDate} </p>
    </div>
  )
}

export default HabitDetails