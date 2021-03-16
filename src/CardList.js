import React from "react";
import Card from "./Card";

const CardList = ({robots, robotFilter}) => {
    return (
        <div className="tc">
            {robots
            .filter(robot => robot.name.toLowerCase().includes(robotFilter))
            .map((robot, id = robot.id) => {
                return (
                    <Card robot={robot} key={id}/>
                )
            })}
        </div>
    )
}

export default CardList;