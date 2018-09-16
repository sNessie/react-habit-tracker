import React, {Component} from 'react'


class AddHabbit extends Component{
  state = {
    id: '',
    name: '',
    date: '',
    times:'' ,
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
    // TODO: function generates timesRepeat with unique id
    // TODO: unique id for habit
    e.preventDefault();
    this.props.handleSave({...this.state});
    this.setState({
      id: '',
      name: '',
      date: '',
      times:'' ,
      timesRepeat: [{
        id: '',
        date: '',
        ready: false
      }],
      ready: 0
    })
  }

  render(){
  return (
    <div className="row">
    <div className="col s12 m6 offset-m3">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <form onSubmit={this.handleSubmit}>
            <input type="text"
              placeholder="name"
              name="name"
              onChange={this.handleChange}/>
            <label>
              Start date:
              <input type="date"
                name="date"
                onChange={this.handleChange}/>
            </label>
            <label>
              Days repeat:
              <input type="number"
                name="times"
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
