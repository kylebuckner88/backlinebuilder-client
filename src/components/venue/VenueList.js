import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { getVenues } from "./VenueManager.js"
import { VenueCard } from "./VenueCard.js"
// import "./Venue.css"

export const VenueList = (props) => {
    const [ venues, setVenues ] = useState([]);
    const history = useHistory()

    useEffect(() => {
        getVenues().then(data => setVenues(data))
    }, [])


    return (
        <article className="venues">
        <h2>Venues</h2>
            {venues.map(venue => 
                <VenueCard
                key={venue.id}
                venue={venue}
                />
            )}
        </article>
    )
}