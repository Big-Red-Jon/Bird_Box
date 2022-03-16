import React, { useState, createContext } from "react"

export const LocationContext = createContext()
const URL = "http://localhost:8000"

export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    const getLocations = () => {
        return fetch(`${URL}/locations`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("bb_token")}`,
            },
        })
            .then(res => res.json())
            .then(setLocations)
    }

    const getLocationById = (LocationId) => {
        return fetch(`${URL}/birds/${LocationId}
        `)
            .then(res => res.json())
    }

    return (
        <BirdContext.Provider value={{
            locations, getLocations, getLocationById, searchTerms, setSearchTerms
        }}>
            {props.children}
        </BirdContext.Provider>
    )

}