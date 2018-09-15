import React, { Component } from 'react'


class Search extends Component {

  render(){
    return(
      <form>
        <input type="text"
          placeholder="Type to filter..."
          onChange ={(e) => this.props.filterUpdate(e.target.value)}
        />
      </form>
    )
  }
}

export default Search
