import React, { useState, useEffect } from "react";

export const ProfileContext = React.createContext();

export const ProfileProvider = (props) => {
    const [profile, setProfile] = useState({});

    //This is calling the profile immediately on a locale level and passing it down as it exists already. 
    // useEffect(() => {
    //     fetch("http://localhost:8000/profile", {
    //         headers: {
    //             Authorization: `Token ${localStorage.getItem("bb_token")}`,
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((josn) => setProfile(josn))
    // }, []);



    const getProfile = () => {
        return fetch("http://localhost:8000/profile", {
            headers: {
                Authorization: `Token ${localStorage.getItem("bb_token")}`,
            },
        })
            .then((response) => response.json())
            .then(setProfile);
    };

    return (
        <ProfileContext.Provider value={{ profile, getProfile }}>
            {props.children}
        </ProfileContext.Provider>
    );
};