import React, { useState } from "react";

export const WatcherContext = React.createContext();

export const WatcherProvider = (props) => {

    const [currentWatcher, setCurrentWatcher] = useState({});

    const getCurrentWatcher = () => {
        return fetch("http://localhost:8000/profile", {
            headers: {
                Authorization: `Token ${localStorage.getItem("bb_token")}`,
            },
        })
            .then((response) => response.json())
            .then(setCurrentWatcher);
    };

    return (
        <ProfileContext.Provider value={{ currentWatcher, getCurrentWatcher }}>
            {props.children}
        </ProfileContext.Provider>
    );
};