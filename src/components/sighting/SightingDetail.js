import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { SightingContext } from "./SightingProvider"
import { useHistory } from "react-router-dom"

export const SightingDetail = (props) => {
    const { sightings, getSightings } = useContext(SightingContext)
    const [sighting, setSighting] = useState(props.sighting || { sightings: {} })
    const { sightingId } = useParams();
    const handleRelease = () => {
        deleteSighting(sighting.id)
            .then(() => {
                history.push("/sightings")
            })
    }

    useEffect(() => {
        if (!props.sighting) {
            const thisSighting = sightings.find(sighting => sighting.id === parseInt(sightingId))
            setSighting(thisSighting)
        }
    }, [sightingId])
    const history = useHistory()

    return (
        <>
            <article>

                <section key={`sighting--${sighting.id}`}>
                    <div>
                        <h3>Sighting Information</h3>
                        <p>{sighting.bird.common_name.CommonName}</p>
                        <p>{sighting.bird}</p>
                        <img className="sightImg" alt="bird" src={sighting.bird.bird_img} />
                        <p>{sighting.location.region}</p>
                        <p>{sighting.sighted}</p>
                        <button onClick={() => history.push(`/sightings`)}>
                            Return</button>
                        <button onClick={() => {
                            history.push(`/sightings/edit/${sighting.id}`)
                        }}>Edit</button>
                        <button onClick={handleRelease}>Delete</button>
                    </div>
                </section>

            </article>
        </>
    )







};