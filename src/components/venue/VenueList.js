import React, { useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { getVenues } from "./VenueManager.js"
import { VenueCard } from "./VenueCard.js"
import { getVenueByLocation } from "./VenueManager"
import "./Venue.css"


export const VenueList = (props) => {
    const [ venues, setVenues ] = useState([])
    const history = useHistory()
    const {locationId} = useParams();
        



    useEffect(() => {
        getVenueByLocation(locationId).then(data => setVenues(data))
    }, [])






    return (
        <div id="venues">
            <h1>Venues</h1>
            <section className="venue-cards">
                {venues.map(venue => 
                <VenueCard
                    key={venue.id}
                    venue={venue}
                    />
                )}
            </section>
        </div>
    )
}