import React, { useContext, useEffect } from "react"
import { WatcherContext } from "./WatcherProvider"
import { useHistory } from "react-router-dom"

export const ProfilePage = () => {
    const { profile, getCurrentWatcher, getSightingsByWatcher } = useContext(WatcherContext)

    useEffect(() => {
        getCurrentWatcher();
    }, []);


    // useEffect(() => {
    //     if (profile.watcher) {
    //         getSightingsByWatcher(profile.watcher.id)
    //     }
    // }, [profile])

    return (
        <>
            <h2>{profile.watchers?.user.first_name} {profile.watchers?.user.last_name}</h2>
            <section className="profile">
                <div className="user_info">
                    <div>
                        Test: {profile.watchers}
                    </div>
                    <div>
                        Age: {profile.watchers?.region_id.country}
                    </div>
                    <div>
                        Created on {profile.watchers?.created_on}
                    </div>
                </div>
            </section>
            <section className="posts">
                <div className="user_posts">
                    Sightings: {profile.watchers?.sighting.bird}
                </div>
            </section>
        </>

    )


}