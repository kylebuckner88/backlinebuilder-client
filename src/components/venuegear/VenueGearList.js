import React, { useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { getVenueGearList, getVenueGearById } from "./VenueGearManager.js"
import { VenueGearCard } from "./VenueGearCard.js"
// import "./VenueGearList.css"

export const VenueGearList = (props) => {
    const history = useHistory();
    const [venuegearlist, setVenueGearList] = useState([])
    const {venueId} = useParams();

    useEffect(() => {
        getVenueGearById(venueId).then(data => setVenueGearList(data))
        console.log(venuegearlist)
    }, [])



    return (
        <article className="venuegear">
            <h2>Available Backline Gear</h2>
                <VenueGearCard/>
        </article>
    )
}