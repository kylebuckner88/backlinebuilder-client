import React from "react"
import { Route } from "react-router-dom"
import { EventList } from "./event/EventList"
import { EventForm } from "./event/EventForm"
import { UpdateEventForm } from "./event/UpdateEventForm"
import { VenueList } from "./venue/VenueList"

export const ApplicationViews = () => {
    return <>
        <Route exact path="/events">
            <EventList />
        </Route>
        <Route exact path="/events/new">
            <EventForm />
        </Route>
        <Route exact path="/events/:eventId/update">
            <UpdateEventForm />
        </Route>
        <Route exact path="/venues">
            <VenueList />
        </Route>
    </>
}