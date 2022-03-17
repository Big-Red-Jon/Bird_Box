import React, { useContext, useEffect } from "react"
import { WatcherContext } from "./WatcherProvider"
import { useHistory } from "react-router-dom"

export const ProfilePage = () => {
    const { profile, getCurrentWatcher, getSightingsByWatcher } = useContext(WatcherContext)

    useEffect(() => {
        getCurrentWatcher();
    }, []);


    useEffect(() => {
        if (profile.watcher) {
            getSightingsByWatcher(profile.watcher.id)
        }
    }, [profile])

    return (
        <>
            <h2>{profile.watcher?.user.first_name} {profile.watcher?.user.last_name}</h2>
            <section className="profile">
                <div className="user_info">
                    <div>
                        {profile.watcher?.profile_image_url}
                    </div>
                    <div>
                        Age: {profile.watcher?.region_id.country}
                    </div>
                    <div>
                        Created on {profile.watcher?.created_on}
                    </div>
                </div>
            </section>
            <section className="posts">
                <div className="user_posts">
                    Posts: {profile.watcher?.sighting.bird}
                </div>
            </section>
        </>

    )


}