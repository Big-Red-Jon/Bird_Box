import React, { useState } from "react";

export const WatcherContext = React.createContext();
const URL = "http://localhost:8000"

export const WatcherProvider = (props) => {

    const [currentWatcher, setCurrentWatcher] = useState({});
    const [sightings, setSightings] = useState([])

    const getCurrentWatcher = () => {
        return fetch(`${URL}/profile`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("bb_token")}`,
            },
        })
            .then((response) => response.json())
            .then(setCurrentWatcher);
    };

    const getSightingsByWatcher = (id) => {
        return fetch(`${URL}/profile/${id}/sightings`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("dd_token")}`,
            },
        })
            .then((response) => response.json())
            .then(setSightings)
    }

    return (
        <WatcherContext.Provider value={{
            currentWatcher, getCurrentWatcher, getSightingsByWatcher
        }}>
            {props.children}
        </WatcherContext.Provider>
    );
};