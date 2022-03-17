import React, { useContext, useEffect, useState, useParams } from "react"
import { BirdContext } from "./BirdProvider.js"
// import { BirdDetail } from "./BirdDetail.js";
import "./Bird.css"
import { useHistory } from "react-router-dom";

export const BirdList = () => {
    const { birds, getBirds } = useContext(BirdContext);
    // const [filteredBirds, setFiltered] = useState([])

    useEffect(() => {
        getBirds();
    }, []);

    const history = useHistory()

    return (
        <>
            <article className="BirdItems">
                {birds.map((bird) => {
                    return (
                        <section key={`bird--${bird.id}`}>
                            <div>
                                <p>{bird.common_name.CommonName}</p>
                                <p>{bird.location.region}</p>
                                <p>{bird.location.country}</p>
                                <p>{bird.location.state}</p>
                                <img alt="bird" src={bird.bird_img} /><br />
                                <button onClick={() => history.push(`/birds/detail/${bird.id}`)}>
                                    See More About this Bird</button>
                                <button onClick={() => history.push(``)}>
                                    Add Bird To Sighting
                                </button>
                            </div>
                        </section>
                    )
                })}
                {/* <div className="leads">
                    {
                        birds.map(bird => {
                            return <BirdDetail key={bird.id} bird={bird} />
                        })
                    }
                </div> */}
            </article>
        </>
    );
};