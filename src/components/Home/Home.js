import React, {Component} from 'react'
import ShowHabits from '../ShowHabits/ShowHabits'
import Search from '../Search/Search'
import axios from 'axios'

class Home extends Component{
  state = {
    habits : [ ],
    filterText : ''
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

  render(){
    return (
      <div className="container">
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
