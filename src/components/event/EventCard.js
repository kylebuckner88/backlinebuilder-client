import React from "react";
import { Link } from "react-router-dom"
import { getEvents } from "./EventManager.js"
// import "./Event.css"


export const EventCard = ({ event, delEvent }) => {


    return (
        <>
    <section key={`event--${event.id}`} className="event">
        <div className="event__artist">{event.artist.name} by {event.artist.user.username} </div>
        <div className="event__venue">{event.venue.name}</div>
        <div className="event__notes">{event.notes}</div>
        <div className="event__date">Date: {event.date}</div>
        <div className="event__time">Time: {event.time}</div>
        <div className="buttons">
            <Link to={`events/${event.id}/update`}><button className="cardBtn">Edit</button> </Link>
            <Link to={`events/${event.id}`} ><button className="cardBtn">Details</button> </Link>
            <button 
                className="cardBtn"
                onClick={() => {
                    delEvent(event.id)

                }}>
            Delete
            </button>
        </div>
    </section>
    </>
    )
}