import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const NavBar = () => {
    const history = useHistory()
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="nav-link" to="/Profile">Profile</Link>
            </li>
            <li className="navbar__item">
                <Link className="nav-link" to="/Sightings">Sightings</Link>
            </li>
            <li className="navbar__item">
                <Link className="nav-link" to="/Birds">All Birds</Link>
            </li>
            <li className="navbar__item">
                <Link className="nav-link" to="/Users">Users</Link>
            </li>
            {
                (localStorage.getItem("bb_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("bb_token")
                                history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}
