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
    showAddForm: false
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
  showForm = () => {
    this.setState((prevState, props) => {
      return{
        showAddForm: !prevState.showAddForm
      }
    })
  }

  deleteHabit = (id) => {
    const habits = this.state.habits.filter( h => h.id !== id);
    this.setState({habits});
  }

  render(){
    const {showAddForm, habits, filterText} = this.state;
    return (
      <div className="container">
        <div className="center">
            <button className="waves-effect waves-light btn-large"
              onClick={this.showForm}>Add form habit
            </button>
        </div>
        {showAddForm ? <AddHabbit handleSave={this.handleSave} /> : null }
        <Search filterText = {filterText}
        filterUpdate = {this.filterUpdate} />
        <ShowHabits habits = {habits}
          filterText = {filterText}
          deleteHabit = {this.deleteHabit}
          />

      </div>
    )
  }
}




export default Home
