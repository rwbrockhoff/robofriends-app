import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

const App = () => {
    return (
        <div>
            <h1 className="tc">RoboFriends</h1>
            <SearchBox/>
            <CardList/>
        </div>
    )
}

export default App;