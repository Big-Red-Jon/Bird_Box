import React, { useContext, useEffect } from "react"
import { UsersContext } from "./UserProviders"
import "./User.css"
import { useHistory } from "react-router-dom"

export const UserList = () => {
    const { users, getUsers } = useContext(UsersContext);

    useEffect(() => {
        getUsers();
    }, []);

    const history = useHistory()

    return (
        <>
            <article className="AllUsers">
                <h1>All Watchers</h1>
                <div>
                    {users && users.map((user) => {
                        return (
                            <p>${user.first_name}</p>
                        )
                    })}
                </div>
            </article>
        </>
    )

}