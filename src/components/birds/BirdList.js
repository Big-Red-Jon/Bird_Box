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
                <h1>All Birds</h1>
                <div className="allCards">
                    {birds && birds.map((bird) => {
                        return (
                            <section className="birdcard" key={`bird--${bird.id}`}>
                                <div className="birdcontainer">
                                    <h3>{bird.common_name.CommonName}</h3>
                                    <img alt="bird" src={bird.bird_img} /><br />
                                    <div className="states">
                                        <h3>States Found in:</h3>
                                        {bird.location && bird.location.map((local) => {
                                            return (
                                                <section key={`bird--${bird.id}`}>
                                                    <ul>
                                                        <li>{local?.state}</li>
                                                        {/* <p>Country: {local?.country}</p> */}
                                                    </ul>
                                                </section>
                                            )
                                        })}
                                    </div>
                                    <div className="taxo">
                                        <h4>Taxonomy</h4>
                                        <ol>
                                            <li>Kingdom: {bird.common_name.Kingdom}</li>
                                            <li>Phylum: {bird.common_name.Phylum}</li>
                                            <li>Class: {bird.common_name.Class}</li>
                                            <li>Order: {bird.common_name.Order}</li>
                                            <li>Family: {bird.common_name.Family}</li>
                                            <li>Genus: {bird.common_name.Genus}</li>
                                            <li>Species: {bird.common_name.Species}</li>
                                        </ol>
                                    </div>
                                    {/* <button className="birdButton" onClick={() => history.push(`/Sightings/Create`)}>Add Bird to Sightings</button><br /> */}
                                </div>
                            </section>
                        )
                    })}
                </div>
            </article>
        </>
    );
};