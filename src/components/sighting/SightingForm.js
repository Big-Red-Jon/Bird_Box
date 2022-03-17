import React, { useContext, useEffect, useState } from "react"
import { SightingContext } from "./SightingProvider"
import { BirdContext } from "../birds/BirdProvider"
import { useHistory, useParams } from "react-router-dom"
import DatePicker from "react-datepicker";


export const SightForm = () => {
    const { addSighting, getSightingById, updateSighting } = useContext(SightingContext)
    const { birds, getBirds } = useContext(BirdContext)

    const [sighting, setSighting] = useState({
        id: 0,
        bird: 0,
        location: 0,
        watcher: 0,
        sighted: ""
    })

    const FORMAT = "MM/dd/yyyy"
    const { sightingId } = useParams();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const [receiveDate, setReceiveDate] = useState(new Date())

    const editInputChange = (event) => {
        const newSighting = { ...sighting }
        newSighting[event.target.id] = event.target.value
        setSighting(newSighting)
    }

    useEffect(() => {
        getBirds()
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
                .then(() => history.push(`sightings`))
        }
    }



    return (
        <>
            <h2> {sightingId ? <>Updated Sighting</> : <>Add New Sighting</>}</h2>
            <fieldset>
                <div>
                    <label htmlFor="Bird">Bird: </label>
                    <select
                        name="bird"
                        value={sighting.bird}
                        onChange={editInputChange}
                    >
                        <option value="0">Select A Bird ...</option>
                        {birds.map((bird) => (
                            <option
                                key={bird.id}
                                value={bird.id}
                            >
                                {bird.common_name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label htmlFor="Location">Location: </label>
                    <select
                        name="location"
                        value={sighting.location}
                        onChange={editInputChange}
                    >
                        <option value="0">Select A Location ...</option>
                        {locations.map((location) => (
                            <option
                                key={location.id}
                                value={location.region}
                            >
                                {sighting.location}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="sighted"> Date Sighted: </label>
                    <DatePicker className="form--item" id="sighted" dateFormat={FORMAT}
                        selected={receiveDate} onChange={(FORMAT) => setReceiveDate(FORMAT)} />
                </div>
            </fieldset>
            <button disabled={isLoading}
                onClick={event => {
                    event.preventDefault()
                    saveSighting()
                }}>
                {sightingId ? <>Save Sighting</> : <>Add Sighting</>}
            </button>{' '}
        </>
    )



}