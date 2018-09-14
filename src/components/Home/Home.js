import React, {Component} from 'react'
import ShowHabits from '../ShowHabits/ShowHabits'
import axios from 'axios'

class Home extends Component{
  state = {
    habits : [ ]
  }

  componentDidMount(){
    axios.get('data.json')
      .then(response => {
        this.setState({
          habits: response.data
        })
      })
  }

  makeReady = (id) =>{

  }

  filterHabit = ({habits}) => {
    // const searchHabit = e.currentTarget.value;
    const habit = habits[0].name;
    // .filter(name => name.toLowerCase().includes(searchHabit.toLowerCase()));
    console.log(habit);
  }

  getFilterHabit = (searchHabit) => {
      return this.state.habits.filter(name => name.toLowerCase().includes(searchHabit.toLowerCase()))
  }


  render(){
    return (
      <div className="container">
        <input onInput = {this.filterHabit} habits = {this.state.habits} />
        <ShowHabits habits = {this.state.habits}
          makeReady = {this.makeReady}
          counterHabits={this.counterHabits}/>
      </div>
    )
  }
}




export default Home
