import React, {Component} from 'react'
import ShowHabits from '../ShowHabits/ShowHabits'
import Search from '../Search/Search'
import AddHabbit from '../AddHabbit/AddHabbit'
import axios from 'axios'

class Home extends Component{
  state = {
    habits : [ ],
    filterText : '',
    idNextHabit: '',
  }

  componentDidMount(){
    axios.get('data.json')
      .then(response => {
        this.setState({
          habits: response.data
        })

      })
  }

  filterUpdate = (filterText) => {
    this.setState({
      filterText
    })
  }

  handleSave = (habit) => {
    this.setState(() => {
      const newHabit = {...habit, id: this.state.habits.length}
      return{
         habits: [...this.state.habits, newHabit]
      }
  })
  }

  render(){

    return (
      <div className="container">

        <AddHabbit handleSave={this.handleSave} />
        <Search filterText = {this.state.filterText}
        filterUpdate = {this.filterUpdate} />
        <ShowHabits habits = {this.state.habits}
          filterText = {this.state.filterText}
          />

      </div>
    )
  }
}




export default Home
