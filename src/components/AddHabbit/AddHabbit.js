import React, {Component} from 'react'


class AddHabbit extends Component{
  state = {
    id: '',
    name: '',
    date: '',
    times: 0 ,
    timesRepeat: [{
      id: '',
      date: '',
      ready: false
    }],
    ready: 0
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const timesRepeat = this.generateTimesRepeat(this.state.date, this.state.times);
    this.setState(
      timesRepeat
    )
    this.props.handleSave({...this.state, timesRepeat});
    this.setState({
      id: '',
      name: '',
      date: '',
      times: 0,
      timesRepeat: [{
        id: '',
        date: '',
        ready: false
      }],
      ready: 0
    })
  }

generateTimesRepeat = (date, times) => {
  let startDate = new Date(date);
  times = parseInt(times, 10);
  let timesRepeat = [];
  let newDate = new Date();
  let id = 0;
  for(let i=0; i<times; i++){
    id = Math.floor(Math.random()*1000);
    newDate.setDate(startDate.getDate() + i);
    timesRepeat.push({id: id, date: newDate.toISOString().substring(0, 10), ready: false })

  }
  console.log(timesRepeat);
  return timesRepeat

}
  render(){
    const {name, date, times} = this.state;
  return (
    <div className="row">
    <div className="col s12 m6 offset-m3">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <form onSubmit={this.handleSubmit}>
            <input type="text"
              placeholder="name"
              name="name"
              value={name}
              onChange={this.handleChange}/>
            <label>
              Start date:
              <input type="date"
                value={date}
                name="date"
                onChange={this.handleChange}/>
            </label>
            <label>
              Days repeat:
              <input type="number"
                name="times"
                value={times}
                onChange={this.handleChange}/>
            </label>
            <button
              className="waves-effect waves-light btn-large"
              type="submit">+</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}
}

export default AddHabbit
