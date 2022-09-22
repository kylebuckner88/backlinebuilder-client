import { React, useEffect } from "react";
import { Link, useHistory } from "react-router-dom"
// import { getVenueGearById } from "../venuegear/VenueGearManager";
// import "./Event.css"


export const EventCard = ({ event, delEvent }) => {

    const history = useHistory();
    // const [ venuegearlist, setVenueGearList ] = useState([])


    return (
        <div>
        <section key={`event--${event.id}`} className="event">
        <div className="event__artist">Artist: {event.artist.name}</div>
        <div className="event__venue">Venue: {event.venue.name}</div>
        <div className="event__notes">Notes: {event.notes}</div>
        <div className="event__date">Date: {event.date}</div>
        <div className="event__time">Time: {event.time}</div>
        <div className="buttons">
        <Link to={`events/${event.id}/update`}><button className="cardBtn">Edit</button> </Link>
        <button  
            className="cardBtn"
            onClick={() => {
                delEvent(event.id)
            }}>Delete
        </button>
        {/* <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    console.log(venue.id)
                    getVenueGearById(venue.id)
                        .then(() => history.push(`/venuegearlist/${venue.id}`))
                    }}
                    className="btn btn=primary"
                    id="createBtn">View Available Gear
            </button> */}
    </div>
    </section>
    </div>
    )
    }