import React from "react";
import { Link, useHistory } from "react-router-dom"
// import "./VenueGearCard.css"

export const VenueGearCard = ({ venuegear }) => {

    return (
    <section key={`venuegear--${venuegear.id}`} className="venuegear">
        <div className="card-content">
            <h3 className="card-content"></h3>
            <div className="venuegear-item">{venuegear.gear.maker} {venuegear.gear.name}</div>
        </div>
    </section>
    
    )
}

