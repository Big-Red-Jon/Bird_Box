import React from "react"
import { Route } from "react-router-dom"
//Watcher
import { WatcherProvider } from "./watcher/WatcherProvider"
//Sightings
import { SightingProvider } from "./sighting/SightingProvider"
import { SightingList } from "./sighting/SightingList"
import { SightForm } from "./sighting/SightingForm"
import { SightingDetail } from "./sighting/SightingDetail"
//Birds
import { BirdProvider } from "./birds/BirdProvider"
import { BirdList } from "./birds/BirdList"
import { BirdDetail } from "./birds/BirdDetail"
// All Users
import { ProfileProvider } from "./auth/ProfileProvider"
import { UsersProvider } from "./users/UserProviders"
import { ProfilePage } from "./auth/Profile"
//Locations
import { LocationProvider } from "./locations/LocationProvider"
//Home
import { Homepage } from "./home/MainPage"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "#66CDAA"
        }}>

            <WatcherProvider>
                <LocationProvider>
                    <SightingProvider>
                        <BirdProvider>
                            <UsersProvider>

                                <Route exact path="/Home">

                                    <Homepage />
                                </Route>
                                <Route exact path="/Birds">
                                    <BirdList />
                                </Route>
                                <Route exact path="/Birds/detail/:birdId(\d+)">
                                    <BirdDetail />
                                </Route>
                                <Route exact path="/Sightings">
                                    {/* <SightingSearch /> */}
                                    <SightingList />
                                </Route>
                                <Route path="/sightings/detail/:sightingId(\d+)">
                                    <SightingDetail />
                                </Route>
                                <Route exact path="/Sightings/Create">
                                    <SightForm />
                                </Route>
                                <Route path="/Sightings/Edit/:sightingId(\d+)">
                                    <SightForm />
                                </Route>


                            </UsersProvider>
                        </BirdProvider>
                    </SightingProvider>
                </LocationProvider>
            </WatcherProvider>

        </main>
    </>
}
