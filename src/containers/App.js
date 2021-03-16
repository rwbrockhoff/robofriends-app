import React, {Component} from "react";
import "./App.css";
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

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
        return !robots.length ? 
        <h1 className="tc">Loading...</h1> 
        : 
        (
            <div>
                <div className="header-section">
                <h1 className="tc f1">RoboFriends</h1>
                <SearchBox searchInput={searchInput} handleInput={this.handleInput}/>
                </div>
                <Scroll>
                    <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
}

export default App;