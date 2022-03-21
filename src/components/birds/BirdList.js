import React, { useContext, useEffect, useState, useParams } from "react"
import { BirdContext } from "./BirdProvider.js"
import { LocationContext } from "../locations/LocationProvider.js";
import { BirdDetail } from "./BirdDetail.js";
import "./Bird.css"
import { useHistory } from "react-router-dom";

export const BirdList = () => {
    const { birds, getBirds } = useContext(BirdContext);
    const { locations, getLocations } = useContext(LocationContext);
    // const [filteredBirds, setFiltered] = useState([])

    useEffect(() => {
        getBirds();
    }, []);

    useEffect(() => {
        getLocations();
    }, []);

    const history = useHistory()

    return (
        <>
            <article className="BirdItems">
                {birds && birds.map((bird) => {
                    return (
                        <section key={`bird--${bird.id}`}>
                            <div>
                                <p>{bird.common_name.CommonName}</p>
                                <img alt="bird" src={bird.bird_img} /><br />
                                {/* <button onClick={() => history.push(`/birds/detail/${bird.id}`)}>
                                    See More About this Bird</button> */}
                                {/* <BirdDetail key={bird.id} bird={bird} /> */}
                                <div>
                                    <h3>States Found in:</h3>
                                    {bird.location && bird.location.map((local) => {
                                        return (
                                            <section key={`bird--${bird.id}`}>
                                                <div>
                                                    <p>{local?.state}</p>
                                                    {/* <p>Country: {local?.country}</p> */}
                                                </div>
                                            </section>
                                        )
                                    })}
                                </div>
                                <h3>Taxonomy</h3>
                                <p>Kingdom: {bird.common_name.Kingdom}</p>
                                <p>Phylum: {bird.common_name.Phylum}</p>
                                <p>Class: {bird.common_name.Class}</p>
                                <p>Order: {bird.common_name.Order}</p>
                                <p>Family: {bird.common_name.Family}</p>
                                <p>Genus: {bird.common_name.Genus}</p>
                                <p>Species: {bird.common_name.Species}</p>

                                <button onClick={() => history.push(`/Sightings/Create`)}>Add Bird to Sightings</button><br />
                            </div>
                        </section>
                    )
                })}
            </article>
        </>
    );
};