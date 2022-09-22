import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import { getVenueGearById } from "../venuegear/VenueGearManager"



export const VenueCard = ({ venue }) => {
    const history = useHistory()

    return (
        <section key={`venue--${venue.id}`} className="venue">
            <div className="card-content">
                <h3 id="venue-card-name">{venue.name}</h3>
                <div className="venue-address"> {venue.address}</div>
            </div>
            <div className="buttons">
                <button type="submit"
                    onClick={evt => {
                        evt.preventDefault()
                        console.log(venue.id)
                        getVenueGearById(venue.id)
                            .then(() => history.push(`/venuegearlist/${venue.id}`))
                        }}
                        className="btn btn=primary"
                        id="gearBtn">View Available Gear
                </button>
            </div>
        </section>
    )
}