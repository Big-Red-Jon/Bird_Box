import React, { useState } from "react";

export const SightingContext = React.createContext();
const URL = "http://localhost:8000"

export const SightingProvider = (props) => {
    const [sightings, setSighting] = useState([])

    const getSightings = () => {
        return fetch(`${URL}/sightings`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("bb_token")}`,
            },
        })
            .then(res => res.json())
            .then(setSighting)
    }

    const addSighting = sightingSelect => {
        return fetch(`${URL}/sightings`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sightingSelect)
        })

            .then(getSightings)
    }

    const updateSighting = sighting => {
        return fetch(`${URL}/sightings/${sighting.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sighting)
        })

            .then(getSightings)
    }

    const deleteSighting = sightingId => {
        return fetch(`${URL}/sightings/${sightingId}`, {
            method: "DELETE"
        })
            .then(getSightings)
    }

    const getSightingById = (sightingId) => {
        return fetch(`${URL}/sightings/${sightingId}
        `)
            .then(res => res.json())
    }

    return (
        <SightingContext.Provider value={{
            sightings, getSightings, addSighting, updateSighting, deleteSighting, getSightingById
        }}>
            {props.children}
        </SightingContext.Provider>
    )
}