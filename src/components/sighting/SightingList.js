import React, { useContext, useEffect } from "react"
import { SightingContext } from "./SightingProvider"
import { SightingDetail } from "./SightingDetail";
import "./Sighting.css"
import { useHistory } from "react-router-dom";
//New Things
// import Card from 'react-bootstrap/Card';
// import { ButtonGroup } from "react-bootstrap"
// import Button from "react-bootstrap/Button"
// import { ListGroup } from "react-bootstrap"
// import ListGroupItem from "react-bootstrap/ListGroupItem"
// import Collapse from 'react-bootstrap/Collapse'

export const SightingList = () => {
    const { sightings, getSightings, deleteSighting } = useContext(SightingContext)
    useEffect(() => {
        getSightings();
    }, []);

    const handleRelease = (e) => {
        deleteSighting(e.target.id)
            .then(() => {
                history.push("/sightings")
            })
    }


    const history = useHistory()

    return (
        <>
            <article className="allBirds" >
                <h1>Sightings</h1>
                <button onClick={() => history.push(`/Sightings/Create`)}>Create New</button><br />
                <div className="allCards">
                    {sightings.map((sighting) => {
                        return (

                            <section className="card" key={`sighting--${sighting.id}`}>
                                <div className="container" >
                                    <img className="sightImg" alt="bird" src={sighting.bird.bird_img} />
                                    <p>Bird: {sighting.bird.common_name.CommonName}</p>
                                    <p>Spotted In {sighting.location.state}</p>
                                    <div className="birdButton">
                                        <button id={sighting.id} onClick={() => history.push(`/Sightings/Edit/${sighting.id}`)}>Edit Sighting</button>
                                        <button id={sighting.id} onClick={(e) => handleRelease(e)}>Delete</button>
                                    </div>
                                </div>

                            </section>

                        )
                    })}
                </div>
            </article>
        </>
    )

}


