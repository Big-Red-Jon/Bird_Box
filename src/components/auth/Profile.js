import React, { useContext, useEffect } from "react";
import { ProfileContext } from "./ProfileProvider.js";

export const ProfilePage = () => {
    const { profile } = useContext(ProfileContext);

    useEffect(() => {
        getProfile();
    }, []);

    if (profile.user) {
        return (<>
            <h1>Your Profile</h1>
            <h2>{profile.user.first_name} {profile.user.last_name}</h2>

        </>)
    }

    return (
        <>

            <p>{profile.watcher.user.first_name}</p>
            <header>
                <h1>Your Profile</h1>
                <h2>{profile.watcher.user.first_name} {profile.watcher.user.last_name}</h2>
            </header>
            <section className="profile__info">
                <header className="profile__header">
                    <h3>Your Info</h3>
                </header>
                <div className="profile__name">
                    Welcome: {profile.watchers && profile.watchers.user.first_name}{" "}
                    {profile.watchers && profile.watchers.user.last_name}
                </div>


            </section>

        </>

    )


}


{/* <section className="profile">
                <div className="user_info">
                    <div>
                        Test: {profile.watchers}
                    </div>
                    <div>
                        Age: {profile.region_id.country}
                    </div>
                    <div>
                        Created on {profile.created_on}
                    </div>
                </div>
            </section>
            <section className="posts">
                <div className="user_posts">
                    Sightings: {profile.sighting.bird}
                </div>
            </section> */}