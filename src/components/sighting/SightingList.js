import React, { useContext, useEffect } from "react"
import { SightingContext } from "./SightingProvider"
import { SightingDetail } from "./SightingDetail";
import "./Sighting.css"
import { useHistory } from "react-router-dom";

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



    // const [filteredLeads, setFiltered] = useState([])
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
                                <p>Bird: {sighting.bird.common_name.CommonName}</p>
                                <p>Spotted In {sighting.location.state}</p>

                                <button id={sighting.id} onClick={() => history.push(`/Sightings/Edit/${sighting.id}`)}>Edit Sighting</button>
                                <button id={sighting.id} onClick={(e) => handleRelease(e)}>Delete</button>
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


