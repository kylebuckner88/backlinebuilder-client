import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { createEvent, getEvents } from "./EventManager"
import { getVenues } from "../venue/VenueManager"


export const EventForm = () => {
    const history = useHistory()
    const [events, setEvents] = useState([])
    const [venues, setVenues] =  useState([])


    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentEvent, setCurrentEvent] = useState({
        artist: 0,
        venue_id: 0,
        notes: "",
        date: "",
        time: "",
    })

    useEffect(() => {
        getEvents().then(setEvents)
    }, [])

    useEffect(() => {
        getVenues().then(setVenues)
    })

    const changeEventState = (domEvent) => {
        const newEventState = {...currentEvent}
        newEventState[domEvent.target.name] = domEvent.target.value
        setCurrentEvent(newEventState)
    }

    const handleSubmit = e => {
        e.preventDefault()

        const event = {
            artist: currentEvent.artist,
            venue_id: currentEvent.venue.id,
            notes: currentEvent.notes,
            date: currentEvent.date,
            time: currentEvent.time
        }

        createEvent(event)
            .then(() => history.push("/events"))
    }

    return (
        <form className="eventForm">
            <h2 className="eventForm__title">Create Event:</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="venueId">Venue:</label>
                    <select name="venueId" required className="form-control"
                        value={currentEvent.venueId}
                        onChange={changeEventState}
                    >
                        {
                            venues.map(v => <option key={v.id} value={g.id}>{g.label}</option>)
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required className="form-control"
                        value={currentEvent.description}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input type="date" name="date" required autoFocus className="form-control"
                        value={currentEvent.date}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="time">Time:</label>
                    <input type="time" name="time" required autoFocus className="form-control"
                        value={currentEvent.time}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="organizer">Organizer:</label>
                    <select name="organizer" required className="form-control"
                        value={currentEvent.organizer.id}
                        onChange={changeEventState}
                    >
                        {
                            events.map(e => <option key={e.id} value={e.id}>{e.label}</option>)
                        }
                    </select>
                </div>
            </fieldset>

            {/* TODO: create the rest of the input fields */}

            <button type="submit"
                onClick={handleSubmit}
                className="btn btn-primary">Create</button>
        </form>
    )
}