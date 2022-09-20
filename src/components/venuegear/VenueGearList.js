import React, { useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { getVenueGearList, getVenueGearByVenue } from "./VenueGearManager.js"
import { VenueGearCard } from "./VenueGearCard.js"
import { getVenueById } from "../venue/VenueManager.js"
// import "./VenueGearList.css"

export const VenueGearList = (props) => {
    const history = useHistory();
    const [ venuegearlist, setVenueGearList ] = useState([])
    const {venueId} = useParams();
    const [ venue, setVenue ] = useState([])
    const [ currentVenue , setCurrentVenue ] = useState({
        venueId: 0,
        name: "",
        address: ""
    })

    useEffect(() => {
        getVenueGearByVenue(venueId).then(data => setVenueGearList(data)) 
    }, [])

    const selectVenue = () => {
        getVenueById(venueId)
            .then(data => {
                setCurrentVenue(data)
                console.log(data)
            })
    }

    useEffect(() => {
        selectVenue()
    }, [])

    





    return (
        <article className="venuegear">
            <h2>{currentVenue.name}</h2>
            <h2>Available Backline Gear</h2>
            {venuegearlist.map(venuegear =>
                <VenueGearCard
                key={venuegear.id}
                venuegear={venuegear}
                />
            )}
            <button type="create"
            className="btn btn-primary"
            id="createBtn"
                onClick={() => {
                    history.push(`/events/${currentVenue.id}/new`)
                }
            }
            >Create Event</button>
        </article>
    )
}