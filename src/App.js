import React, {Component} from "react";
import "./App.css";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

class App extends Component {
    state = {
        robots: [],
        searchInput: ""
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    }

    handleInput = (event) => {
        this.setState({searchInput: event.target.value})
    }

    render(){
        const {robots, searchInput} = this.state;
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchInput));
        return (
            <div>
                <h1 className="tc f1">RoboFriends</h1>
                <SearchBox searchInput={searchInput} handleInput={this.handleInput}/>
                <CardList robots={filteredRobots}/>
            </div>
        )
    }
}

export default App;