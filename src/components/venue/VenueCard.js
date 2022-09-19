import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import { getVenueGearById } from "../venuegear/VenueGearManager"



export const VenueCard = ({ venue }) => {
    const history = useHistory()

    return (
    <section key={`venue--${venue.id}`} className="venue">
        <div className="venue__id">{venue.id}</div>
        <div className="venue__name">{venue.name}</div>
        <div className="venue__address"> {venue.address}</div>
        {/* <button>View Available Gear</button> */}
        <div className="buttons">
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    console.log(venue.id)
                    getVenueGearById(venue.id)
                        .then(() => history.push(`/venuegearlist/${venue.id}`))
                    }}
                    className="btn btn=primary"
                    id="createBtn">View Available Gear
            </button>
        </div>
    </section>
    )
}