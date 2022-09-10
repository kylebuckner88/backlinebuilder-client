import React from "react";
import { Link } from "react-router-dom"
import { getVenues, getVenueById } from "./VenueManager.js"


export const VenueCard = ({ venue, event }) => {

    return (
        <>
    <section key={`venue--${venue.id}`} className="venue">
        <div className="venue__name">{venue.name}</div>
        <div className="venue__location">{venue.location}</div>
        <div className="venue__address"> {venue.address}</div>
        <div className="buttons">
            <Link to={`events/${event.id}/new`}><button className="cardBtn">Select</button> </Link>
        </div>
    </section>
    </>
    )
}