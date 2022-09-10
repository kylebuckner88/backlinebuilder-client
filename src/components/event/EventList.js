import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { getEvents, deleteEvent } from "./EventManager.js"
import { EventCard } from "./EventCard.js"
// import "./Event.css"

export const EventList = (props) => {
    const [ events, setEvents ] = useState([]);
    const history = useHistory()

    useEffect(() => {
        getEvents().then(data => setEvents(data))
    }, [])

    const delEvent = (eventId) => {
        deleteEvent(eventId)
            .then(() => getEvents().then(setEvents));
    }


    return (
        <article className="events">
            <h2>Events</h2>
            <button className="btn" id="createEventBtn"
                onClick={() => {
                    history.push({ pathname: "/events/new" })
                }}
            >Create New Event</button>
            {events.map(event => 
                
                <EventCard
                key={event.id}
                event={event}
                delEvent={delEvent}
                />
            )}
        </article>
    )
}