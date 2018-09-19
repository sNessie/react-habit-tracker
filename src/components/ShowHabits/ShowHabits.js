import React, { Component} from 'react'
import './ShowHabits.css'
import MapRepeats from '../MapRepeats/MapRepeats'

class ShowHabits extends Component {
  render(){
    const { habits, filterText } = this.props;
    const habitList = habits
    .filter(habit => {
      return habit.name.toLowerCase().includes(filterText.toLowerCase())
    })
    .map(habit => {
      return (
        <div className="col s12 m6" key={habit.id}>
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{habit.name}</span>
              <p>Date of starting: {habit.date}</p>
              <p>Repeat: {habit.times}</p>
              <p>Ready: {habit.ready}/{habit.times}</p>
                <MapRepeats timesRepeat= {habit.timesRepeat} />
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
}


export default ShowHabits
