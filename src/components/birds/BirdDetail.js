import React, { useContext, useEffect, useState, useParams } from "react"
import { BirdContext } from "./BirdProvider.js"
import "./Bird.css"
import { useHistory } from "react-router-dom";

export const BirdDetail = () => {
    const { birds, getBirds } = useContext(BirdContext);
    const history = useHistory()

    useEffect(() => {
        getBirds();
    }, []);

    // useEffect(() => {
    //     if (bird.id) {
    //         getBirdById(bird.id);
    //     }
    // }, [bird])

    return (
        <>
            <article>
                {birds.map((bird) => {
                    return (
                        <section key={`bird--${bird.id}`}>
                            <div>
                                <h3>Basic Information</h3>
                                <p>{bird.common_name.CommonName}</p>
                                <p>{bird.location.region}</p>
                                <p>{bird.location.country}</p>
                                <p>{bird.location.state}</p>
                                <img alt="bird" src={bird.bird_img} /><br />
                                <h3>Taxonomy</h3>
                                <p>{bird.common_name.Kingdom}</p>
                                <p>{bird.common_name.Phylum}</p>
                                <p>{bird.common_name.Class}</p>
                                <p>{bird.common_name.Order}</p>
                                <p>{bird.common_name.Family}</p>
                                <p>{bird.common_name.Genus}</p>
                                <p>{bird.common_name.Species}</p>
                                <button onClick={() => history.push(`/birds`)}>
                                    Return</button>
                            </div>
                        </section>
                    )
                })}
            </article>
        </>
    );

};