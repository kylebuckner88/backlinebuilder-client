const remoteURL = "http://localhost:8000"

export const getVenues = () => {
    return fetch("http://localhost:8000/venues", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}

export const getVenueById = (locationId) => {
    console.log("locationId", locationId)
    return fetch(`${remoteURL}/venues/${locationId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}



export const getVenueByLocation = (locationId) => {
    return fetch(`${remoteURL}/venues?location=${locationId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        }
    }).then(response => response.json()) 
}

export const getVenueGear = (venueId) => {
    return fetch(`${remoteURL}/venuegear/${venueId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}




