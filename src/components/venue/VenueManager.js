const remoteURL = "http://localhost:8000"

export const getVenues = () => {
    return fetch("http://localhost:8000/venues", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getVenueById = (venueId) => {
    return fetch(`${remoteURL}/venues/${venueId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}


