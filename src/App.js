import React, {Component} from "react";
import {robots} from "./robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

class App extends Component {
    state = {
        robots,
        searchInput: ""
    }

    handleInput = (event) => {
        this.setState({searchInput: event.target.value})
    }

    render(){
        const {robots, searchInput} = this.state;
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchInput))
        return (
            <div>
                <h1 className="tc">RoboFriends</h1>
                <SearchBox searchInput={searchInput} handleInput={this.handleInput}/>
                <CardList robots={filteredRobots}/>
            </div>
        )
    }
}

export default App;