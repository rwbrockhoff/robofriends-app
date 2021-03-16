import React from "react";

const Card = ({robot, id}) => {
    return (
        <div className="bg-light-green tc dib br3 pa3 ma2 bw2 shadow-5 grow" id={id}>
            <img alt="robot" src={`https://robohash.org/${robot.id}?150x150`}/>
            <div>
            <h2>{robot.name}</h2>
            <p>{robot.email}</p>
            </div>
        </div>
    )
}

export default Card;