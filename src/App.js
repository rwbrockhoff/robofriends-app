import React, {Component} from "react";
import {robots} from "./robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

class App extends Component {
    state = {
        robots,
        searchInput: ""
    }

    handleInput = (e) => {
        this.setState({searchInput: e.target.value})
    }

    render(){
        return (
            <div>
                <h1 className="tc">RoboFriends</h1>
                <SearchBox searchInput={this.state.searchInput} handleInput={this.handleInput}/>
                <CardList robots={this.state.robots} robotFilter={this.state.searchInput}/>
            </div>
        )
    }
}

export default App;