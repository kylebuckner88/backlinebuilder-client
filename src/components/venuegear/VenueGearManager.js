const remoteURL = "http://localhost:8000"

export const getVenueGearList = () => {
    return fetch("http://localhost:8000/venuegearlist", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}


export const getVenueGearByVenue = (venueId) => {
    console.log("venueId", venueId)
    return fetch(`${remoteURL}/venuegearlist?venue=${venueId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        } 
    })
        .then(response => response.json())
}

export const getVenueGearById = (venueId) => {
    console.log("venueId", venueId)
    return fetch(`${remoteURL}/venuegearlist/${venueId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}