import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { createEvent  } from './EventManager.js'
import { getVenues, getVenueById } from './../venue/VenueManager.js'


export const EventForm = () => {
    const history = useHistory()
    const [venue, setVenue ] = useState([])
    const {venueId} = useParams();

    
    const [currentEvent, setCurrentEvent] = useState({
        
        venue_id: 0,
        notes: "",
        date: "",
        time: ""
    })

    const getVenueName = () => {
         return getVenueById(venueId).then(data => {
            setVenue(data)
        })
    }

    useEffect(() => {
        getVenueName()
    }, [])



    const changeEventState = (domEvent) => {
        const newEvent = {...currentEvent}
        let selectedVal = domEvent.target.value
        newEvent[domEvent.target.name] = selectedVal
        setCurrentEvent(newEvent)
    }

    return (
        <form className="eventForm">
            <h2 className="eventForm__title">Create Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="maker">Notes </label>
                    <input
                        type="text" 
                        name="notes" 
                        id="notes"
                        required 
                        className="form-control"
                        value={currentEvent.notes}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="numberOfPlayers">Date </label>
                    <input 
                        type="date" 
                        name="date" 
                        id="date"
                        required 
                        className="form-control"
                        value={currentEvent.date}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="skillLevel">Time </label>
                    <input 
                        type="time" 
                        name="time" 
                        id="time"
                        required 
                        className="form-control"
                        value={currentEvent.time}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>


            <button type="submit"
                onClick={evt => {
                
                    evt.preventDefault()

                    const newEvent = {
                        venue: parseInt(venueId),
                        notes: currentEvent.notes,
                        date: currentEvent.date,
                        time: currentEvent.time
                    }

                  
                    createEvent(newEvent)
                        .then(() => history.push("/events"))
                }}
                className="btn btn-primary" 
                id="createBtn">Create</button>
        </form>
    )
}
    
                  
                       