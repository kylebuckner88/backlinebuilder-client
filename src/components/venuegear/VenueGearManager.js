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

export const getGearList = () => {
    return fetch("http://localhost:8000/gearlist", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getGearTypes = () => {
    return fetch("http://localhost:8000/gearlist?=types", { 
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getVenueGearById = (venueId) => {
    return fetch(`${remoteURL}/venuegearlist/${venueId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        } 
    })
        .then(response => response.json())
}