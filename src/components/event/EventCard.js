import React from "react";
import { Link, useHistory } from "react-router-dom"
// import "./Event.css"


export const EventCard = ({ event, delEvent }) => {

    const history = useHistory();

    return (
    <section key={`event--${event.id}`} className="event">
        <div className="event__artist">Artist: {event.artist}</div>
        <div className="event__venue">Venue: {event.venue}</div>
        <div className="event__notes">Notes: {event.notes}</div>
        <div className="event__date">Date: {event.date}</div>
        <div className="event__time">Time: {event.time}</div>
        <div className="buttons">
            <Link to={`events/${event.id}/update`}><button className="cardBtn">Edit</button> </Link>
            <button 
                className="cardBtn"
                onClick={() => {
                    delEvent(event.id)

                }}>
            Delete
            </button>
        </div>
    </section>
    )
}