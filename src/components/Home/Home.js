import React, {Component} from 'react'
import ShowHabits from '../ShowHabits/ShowHabits'

class Home extends Component{
  state = {
    habits : [
      { id: 1,
        name: 'running',
        date: '9/09/2018',
        times: 1,
        timesRepeat: [{
          date:'5/9/2018',
          ready: false
        }],
        ready: 0,
        frequ: 0
      },
      { id: 2,
        name: 'walking',
        date: '12/09/2018',
        times: 2,
        timesRepeat: [
          {
            date:'5/9/2018',
            ready: false
          },
          {
            date:'5/9/2018',
            ready: true
        }],

        ready: 2,
        frequ: 0
      }

    ]
  }

  // counterHabits = (counter, ready, date) => {
  //     let habitArray = [];
  //     for (let i=0; i < counter; i++){
  //       if (i<ready){
  //         habitArray.push(<div onClick={()=>{this.makeReady(i)}} className='todo ready' key= {i} data-make={date[i]} ></div>);
  //       }else {
  //         habitArray.push(<div onClick={()=>{this.makeReady(i)}} className='todo' key={i} data-make={date[i]}></div>);
  //       }
  //
  //     }
  //     return habitArray;
  // }

  makeReady = (id) =>{

  }


  render(){
    return (
      <div className="container">
        <ShowHabits habits = {this.state.habits}
          makeReady = {this.makeReady}
          counterHabits={this.counterHabits}/>
      </div>
    )
  }
}




export default Home
