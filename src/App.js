import React from "react";
import {robots} from "./robots";
import Card from "./Card";

const App = () => {
    return (
        <div>
            {robots.map((robot, id = robot.id) => {
                return (
                    <Card robot={robot} id={id}/>
                )
            })}
        </div>
    )
}

export default App;