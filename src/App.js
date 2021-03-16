import React, {Component} from "react";
import "./App.css";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";

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
                <div className="header-section">
                <h1 className="tc f1">RoboFriends</h1>
                <SearchBox searchInput={searchInput} handleInput={this.handleInput}/>
                </div>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        )
    }
}

export default App;