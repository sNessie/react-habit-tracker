import React from 'react'
import './MapRepeats.css'


const MapRepeats = ({timesRepeat}) => {
  const habitRepeat =  timesRepeat.map(time => {
    return(
      <div className={time.ready ? 'todo ready' : 'todo '} key={time.id}><span className="hidden">{time.date}</span></div>
    )
})

  return (
    <div className="row habit-box">
      { habitRepeat }
    </div>
  )
}


export default MapRepeats
