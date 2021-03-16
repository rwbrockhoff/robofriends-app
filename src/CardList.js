import React from "react";
import {robots} from "./robots";
import Card from "./Card";

const CardList = () => {
    return (
        <div className="tc">
            {robots.map((robot, id = robot.id) => {
                return (
                    <Card robot={robot} id={id}/>
                )
            })}
        </div>
    )
}

export default CardList;