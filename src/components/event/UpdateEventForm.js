import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getEventById, updateEvent } from './EventManager'

export const UpdateEventForm = () => {
    const history = useHistory();
    const {eventId} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [ event, setEvent ] = useState({
        artist: 0,
        venue: 0,
        notes: "",
        date: "",
        time: ""
    })

    const loadEvent = () => {
        getEventById(eventId)
            .then(data => {
                setEvent(data)
                setIsLoading(false);
                console.log(data)
            })
    }

    useEffect(() => {
        loadEvent()
    }, [])


    const handleFieldChange = (domEvent) => {
        const updatedEvent = {...event}
        let selectedVal = domEvent.target.value
        updatedEvent[domEvent.target.name] = selectedVal
        setEvent(updatedEvent)
        console.log(updatedEvent)
    }

    return (
        
        <>
        <form className="eventForm">
            <h2 className="eventForm__title">Update event</h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="notes">Notes: </label>
                    <input type="text" 
                        name="notes" 
                        required autoFocus 
                        className="form-control"
                        value={event.notes}
                        onChange={handleFieldChange}
                        id="notes"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date: </label>
                    <input type="date" 
                        name="date" required
                        className="form-control"
                        value={event.date}
                        onChange={handleFieldChange}
                        id="date"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="time">Time: </label>
                    <input type="time" 
                        name="time" required  
                        className="form-control"
                        value={event.time}
                        onChange={handleFieldChange}
                        id="time"
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    // Changing to snake case to match back end
                    const editedEvent = {
                        id: event.id,
                        notes: event.notes,
                        date: event.date,
                        time: event.time,
                        venue: parseInt(event.venue.id),
                        artist: parseInt(event.artist.id)

                        
                    }

                   
                    updateEvent(editedEvent)
                        .then(() => history.push('/events'))
                }}
                className="btn btn-primary" 
                id="createBtn">Update</button>
        </form>
        </>
    )
}