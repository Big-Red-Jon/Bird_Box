import React from "react"
import { Route } from "react-router-dom"
//Watcher
import { WatcherProvider } from "./watcher/WatcherProvider"
//Sightings
import { SightingProvider } from "./sighting/SightingProvider"
// import { SightingList } from "./sighting/SightingList"
//Birds
import { BirdProvider } from "./birds/BirdProvider"
import { BirdList } from "./birds/BirdList"
import { BirdDetail } from "./birds/BirdDetail"
// All Users
import { UsersProvider } from "./users/UserProviders"
import { SightingList } from "./sighting/SightingList"


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            <WatcherProvider>
                <SightingProvider>
                    <BirdProvider>
                        <UsersProvider>
                            <Route exact path="/">
                                <h1>HELLO</h1>
                            </Route>
                            <Route exact path="/Profile">
                                <h1>Profile</h1>
                            </Route>
                            <Route exact path="/Birds">
                                <h1>Birds</h1>
                                <BirdList />
                            </Route>
                            <Route exact path="/Birds/:BirdId(\d+)">
                                <BirdDetail />
                            </Route>
                            <Route exact path="/Sightings">
                                {/* <SightingSearch /> */}
                                <h1>SIGHTINGS</h1>
                                <SightingList />
                            </Route>
                            <Route exact path="/Users">
                                <h1>All USERS</h1>
                            </Route>
                        </UsersProvider>
                    </BirdProvider>
                </SightingProvider>
            </WatcherProvider>
        </main>
    </>
}
