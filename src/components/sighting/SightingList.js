import React, { useContext, useEffect } from "react"
import { SightingContext } from "./SightingProvider"
import { SightingDetail } from "./SightingDetail";
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
                <h2>Sightings</h2>
                <button onClick={() => history.push(`/Sightings/Create`)}>Create New</button><br />
                {sightings.map((sighting) => {
                    return (
                        <section key={`sighting--${sighting.id}`}>
                            <div>
                                <img className="sightImg" alt="bird" src={sighting.bird.bird_img} />
                                <p>{sighting.location.region}</p>
                                <p>{sighting.bird.common_name.CommonName}</p>
                                <p>{sighting.watcher.age}</p>
                                <button onClick={() => history.push(`/Sightings/Edit/${sighting.id}`)}>Edit Sighting</button>
                            </div>
                        </section>
                    )
                })}
                {/* <div className="sightings">
                    {
                        sightings.map(sightings => {
                            return <SightingDetail key={sightings.id} sightings={sightings} />
                        })
                    }
                </div> */}

            </article>
        </>
    )

}


