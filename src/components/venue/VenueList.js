import React, { useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { getVenues } from "./VenueManager.js"
import { VenueCard } from "./VenueCard.js"
import { getVenueByLocation } from "./VenueManager"


export const VenueList = (props) => {
    const [ venues, setVenues ] = useState([])
    const history = useHistory()
    const {locationId} = useParams();
        


    // useEffect(() => {
    //     getVenues().then(data => setVenues(data))
    // }, [])

    useEffect(() => {
        getVenueByLocation(locationId).then(data => setVenues(data))
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