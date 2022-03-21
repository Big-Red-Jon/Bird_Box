import React, { useState } from "react";

export const WatcherContext = React.createContext();
const URL = "http://localhost:8000"

export const WatcherProvider = (props) => {

    const [currentWatcher, setCurrentWatcher] = useState({});
    const [sightings, setSightings] = useState([])

    const getCurrentWatcher = () => {
        return fetch(`${URL}/watchers`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("bb_token")}`,
            },
        })
            .then((response) => response.json())
            .then(setCurrentWatcher);
    };

    const getSightingsByWatcher = (id) => {
        return fetch(`${URL}/watchers/${id}/sightings`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("bb_token")}`,
            },
        })
            .then((response) => response.json())
            .then(setSightings)
    }

    const editWatcher = (watcher) => {
        return fetch(`${URL}/watchers/${watcher}`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("bb_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sighting)
        })
            .then(getCurrentWatcher)
    }

    const deleteWatcher = (watcherId) => {
        return fetch(`${URL}/watchers/${watcherId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Token ${localStorage.getItem("bb_token")}`,
            },
        })
            .then(getCurrentWatcher)
    }



    return (
        <WatcherContext.Provider value={{
            currentWatcher, getCurrentWatcher, getSightingsByWatcher, editWatcher, deleteWatcher, sightings
        }}>
            {props.children}
        </WatcherContext.Provider>
    );
};