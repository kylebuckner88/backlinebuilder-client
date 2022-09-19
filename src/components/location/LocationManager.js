const remoteURL = "http://localhost:8000"

export const getLocations = () => {
    return fetch("http://localhost:8000/locations", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}

export const getLocationById = (locationId) => {
    return fetch(`${remoteURL}/locations/${locationId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        } 
    })
        .then(response => response.json())
}

export const selectLocation = (location) => {
    return fetch(`${remoteURL}/locations`, { 
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        }
    }).then(response => response.json())
}

