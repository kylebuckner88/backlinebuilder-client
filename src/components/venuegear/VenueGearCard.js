import React from "react";
import { Link, useHistory } from "react-router-dom"
// import "./VenueGearCard.css"

export const VenueGearCard = ({ venuegear }) => {

    return (
    <section key={`venuegear--${venuegear.id}`} className="venuegear">
        <div className="venuegear__item">{venuegear.gear.maker} {venuegear.gear.name}</div>
    </section>
    
    )
}

