import React, { useContext, useEffect, useState } from "react"
import { SightingContext } from "./SightingProvider"
import { BirdContext } from "../birds/BirdProvider"
import { LocationContext } from "../locations/LocationProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Sighting.css"


export const SightForm = () => {
    const { addSighting, getSightingById, updateSighting } = useContext(SightingContext)
    const { birds, getBirds } = useContext(BirdContext)
    const { locations, getLocations } = useContext(LocationContext)

    const [sighting, setSighting] = useState({
        id: 0,
        bird: 0,
        location: 0,
        watcher: 0,
        sighted: new Date()
    })

    const { sightingId } = useParams();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);


    const editInputChange = (event) => {
        const newSighting = { ...sighting }
        newSighting[event.target.id] = event.target.value
        setSighting(newSighting)
    }

    useEffect(() => {
        getBirds()
    }, [])

    useEffect(() => {
        getLocations()
    }, [])

    useEffect(() => {
        if (sightingId) {
            getSightingById(sightingId)
                .then(sighting => {
                    setSighting(sighting)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }
    }, [])

    const currentWatcher = parseInt(sessionStorage.getItem("bb_token"))

    const saveSighting = () => {
        setIsLoading(true);
        if (sightingId) {
            updateSighting({
                id: parseInt(sightingId),
                bird: parseInt(sighting.bird),
                location: parseInt(sighting.location),
                watcher: currentWatcher,
                sighted: sighting.sighted
            })
                .then(() => history.push(`/sightings`))
        } else {
            addSighting({
                bird: parseInt(sighting.bird),
                location: parseInt(sighting.location),
                watcher: currentWatcher,
                sighted: sighting.sighted
            })
                .then(() => history.push(`/sightings`))
        }
    }



    return (
        <>
            <article className="fullForm">
                <h2> {sightingId ? <>Update Sighting</> : <>Add New Sighting</>}</h2>
                <fieldset>
                    <div>
                        <label htmlFor="bird" name="bird">Bird: </label><br />
                        <select
                            htmlFor="bird" name="bird"
                            value={sighting.bird}
                            selected={sighting.bird.id}
                            onChange={editInputChange}
                            id="bird"
                        >
                            <option value="0">Select A Bird ...</option>
                            {birds.map((bird) => (
                                <option
                                    key={bird.id}
                                    value={bird.id}
                                >
                                    {bird.common_name.CommonName}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <label >Location: </label><br />
                        <select
                            htmlFor="location" name="location"
                            value={sighting.location.state}
                            onChange={editInputChange}
                            id="location"
                        >
                            <option value="0">Select A State ...</option>
                            {locations.map((location) => (
                                <option
                                    key={location.id}
                                    value={location.id}
                                >
                                    {location.state}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <label htmlFor="date">Date of Trip:</label>
                        <input type="date" id="date" name="date" required autoFocus className="form-control"
                            placeholder="Choose Date" onChange={editInputChange}
                            default={sighting.sighted} />

                    </div>
                </fieldset>
                <button disabled={isLoading}
                    onClick={event => {
                        event.preventDefault()
                        saveSighting()
                    }}>
                    {sightingId ? <>Save Sighting</> : <>Add Sighting</>}
                </button>{' '}
            </article>
        </>
    )



}