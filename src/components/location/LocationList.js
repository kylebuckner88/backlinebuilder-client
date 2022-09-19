import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { getVenueById, getVenueByLocation } from "../venue/VenueManager"
import { getLocationById, getLocations} from "./LocationManager"

export const LocationList = (props) => {
    const history = useHistory()
    const [locations, setLocations] = useState([])
    const [ currentLocation, setCurrentLocation ] = useState({
        locationId: 0,
        city: "",
        state: ""
    })
    
    
    useEffect(() => {
        getLocations().then(data => setLocations(data));
    }, [])

    


    


    const changeLocationState = (domEvent) => {
        const newLocation = {...currentLocation}
        let selectedVal = domEvent.target.value
        newLocation[domEvent.target.name] = selectedVal
        setCurrentLocation(newLocation)
        console.log(newLocation)
        }


    return (
        
        


        <div className="locationForm">
            <h2 className="locationForm__title">Where are you playing?</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationId">Select a location </label>
                    <select 
                        className="form-control"
                        name="locationId" 
                        id="locationId"
                        required 
                        value={currentLocation.locationId}
                        onChange={changeLocationState} >
                        <option value="0">Please select ...</option>
                            {locations.map(
                                location => (<option key={location.id} value={location.id}>{location.city},{location.state}</option>)
                            )}
                    </select>
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    const newLocation = {
                        id: parseInt(currentLocation.locationId),
                        city: currentLocation.city,
                        state: currentLocation.state
                    }
                    console.log(newLocation.id)
                    getVenueById(newLocation.id)
                        .then(() => history.push(`/venues/${newLocation.id}`))
                }}
                className="btn btn-primary" 
                id="createBtn">Select</button>

        </div>
    )


}

