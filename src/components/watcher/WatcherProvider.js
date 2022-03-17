import React, { useState } from "react";

export const WatcherContext = React.createContext();
const URL = "http://localhost:8000"

export const WatcherProvider = (props) => {

    const [profile, setProfile] = useState({});
    const [sightings, setSightings] = useState([])

    const getCurrentWatcher = () => {
        return fetch(`${URL}/watcher`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("bb_token")}`,
            },
        })
            .then((response) => response.json())
            .then(setProfile);
    };

    const getSightingsByWatcher = (id) => {
        return fetch(`${URL}/watcher/${id}/sightings`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("bb_token")}`,
            },
        })
            .then((response) => response.json())
            .then(setSightings)
    }

    const editWatcher = (watcher) => {
        return fetch(`${URL}/watcher/${watcher}`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("bb_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sighting)
        })
            .then(getCurrentWatcher)
    }

    const deleteWatcher = (watcherId) => {
        return fetch(`${URL}/watcher/${watcherId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Token ${localStorage.getItem("bb_token")}`,
            },
        })
            .then(getCurrentWatcher)
    }



    return (
        <WatcherContext.Provider value={{
            profile, getCurrentWatcher, getSightingsByWatcher, editWatcher, deleteWatcher, sightings
        }}>
            {props.children}
        </WatcherContext.Provider>
    );
};