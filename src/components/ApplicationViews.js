import React from "react"
import { Route } from "react-router-dom"
import { EventList } from "./event/EventList"
import { EventForm } from "./event/EventForm"
import { UpdateEventForm } from "./event/UpdateEventForm"
import { VenueList } from "./venue/VenueList"
import { VenueGearList } from "./venuegear/VenueGearList"
import { LocationList } from "./location/LocationList"

export const ApplicationViews = () => {
    return <>
        <Route exact path="/events">
            <EventList />
        </Route>
        <Route exact path="/events/new">
            <EventForm />
        </Route>
        <Route exact path="/events/:eventId(\d+)/update">
            <UpdateEventForm />
        </Route>
        <Route exact path="/venues/:locationId(\d+)">
            <VenueList />
        </Route>
        <Route exact path="/venuegearlist/:venueId(\d+)">
            <VenueGearList />
        </Route>
        <Route exact path={["/", "/locations"]}>
            <LocationList />
        </Route>
    </>
}