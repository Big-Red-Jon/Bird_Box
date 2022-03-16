import React, { useState, createContext } from "react"

export const BirdContext = createContext()
const URL = "http://localhost:8000"

export const BirdProvider = (props) => {
    const [birds, setBirds] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    const getBirds = () => {
        return fetch(`${URL}/birds`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("bb_token")}`,
            },
        })
            .then(res => res.json())
            .then(setBirds)
    }

    const getBirdById = (birdId) => {
        return fetch(`${URL}/birds/${birdId}
        `)
            .then(res => res.json())
    }

    return (
        <BirdContext.Provider value={{
            birds, getBirds, getBirdById, searchTerms, setSearchTerms
        }}>
            {props.children}
        </BirdContext.Provider>
    )
}

