import REACT, { useState, createContext } from "react"

export const UsersContext = createContext()
const URL = "http://localhost:8000"

export const UsersProvider = (props) => {
    const [users, setUsers] = useState([])
    const [sightings, setSightings] = useState([])


    const getAllUsers = () => {
        return fetch(`${URL}/users`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("bb_token")}`,
            },
        })
            .then((response) => response.json())
            .then(setUsers);
    };

    const getSightingsByUser = (id) => {
        return fetch(`${URL}/users/${id}/sightings`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("bb_token")}`,
            },
            body: JSON.stringify(id)
        })
            .then(setSightings)
    }

    return (
        <UsersContext.Provider value={{
            users, sightings, getAllUsers, getSightingsByUser
        }}>
            {props.children}
        </UsersContext.Provider>
    )

}