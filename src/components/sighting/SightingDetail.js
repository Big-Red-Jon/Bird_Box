import React, { useContext, useEffect } from "react"
import { SightingContext } from "./SightingProvider"
import { useHistory } from "react-router-dom"

export const SightingDetail = () => {
    const { sightings, getSightings } = useContext(SightingContext)

    useEffect(() => {
        getSightings();
    })

    const history = useHistory()

    return (
        <>
            <article>
                {sightings.map((sighting) => {
                    return (
                        <section key={`sighting--${sighting.id}`}>
                            <div>
                                <h3>Sighting Information</h3>
                                <p>{sighting.bird.common_name.CommonName}</p>
                                <img className="sightImg" alt="bird" src={sighting.bird.bird_img} />
                                <p>{sighting.location.region}</p>
                                <p>{sighting.sighted}</p>
                                <button onClick={() => history.push(`/sightings`)}>
                                    Return</button>
                            </div>
                        </section>
                    )
                })}
            </article>
        </>
    )







};