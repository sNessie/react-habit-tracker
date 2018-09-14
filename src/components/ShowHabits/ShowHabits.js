import React from 'react'
import './ShowHabits.css'

const ShowHabits = ({ habits, counterHabits, makeReady }) => {
    const habitList = habits.map(habit => {
      return (
        <div className="col s12 m6" key={habit.id}>
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{habit.name}</span>
              <p>Date of starting: {habit.date}</p>
              <p>Repeat:{habit.times}</p>
              <p>Ready: {habit.ready}/{habit.times}</p>
                {habit.timesRepeat.map(time => {
                  if(time.ready){
                  return(
                    <div className="todo ready" key={time.id}></div>
                )}
                else{
                  return(
                    <div className="todo" key={time.id}></div>
                  )
                }
              })}
            </div>
            <div className="card-action">
              <button className="waves-effect waves-light btn-large  my_btn">Delete</button>
              <button className="waves-effect waves-light btn-large">Edit</button>
            </div>
          </div>
        </div>
      )
    })
    return(
        <div className="row">
          {habitList}
        </div>

      )
      }

export default ShowHabits
