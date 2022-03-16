import React, { useContext, useEffect } from "react"
import { SightingContext } from "./SightingProvider"
import "./Sighting.css"
import { useHistory } from "react-router-dom";

export const SightingList = () => {
    const { sightings, getSightings } = useContext(SightingContext)

    useEffect(() => {
        getSightings();
    }, []);

    const history = useHistory()

    return (
        <>
            <article>
                {sightings.map((sighting) => {
                    return (
                        <section key={`sighting--${sighting.id}`}>
                            <div>
                                <img alt="bird" src={sighting.bird.bird_img} />
                                <p>{sighting.location.region}</p>
                                <p>{sighting.watcher}</p>
                            </div>
                        </section>
                    )
                })}
            </article>
        </>
    )

}


