import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { BirdContext } from "./BirdProvider.js"
import "./Bird.css"
import { useHistory } from "react-router-dom";

export const BirdDetail = (props) => {
    const { birds, getBirds, getBirdById } = useContext(BirdContext);
    const [bird, setBird] = useState(props.bird || { bird: {} })
    const { birdId } = useParams();
    const history = useHistory()


    useEffect(() => {
        getBirds();
    }, []);

    useEffect(() => {
        if (!props.bird) {
            const thisBird = birds.find(bird => bird.id === parseInt(birdId))
            setBird(thisBird)
        }
    }, [birdId])

    useEffect(() => {
        if (bird.id) {
            getBirdById(bird.id);
        }
    }, [bird])

    return (
        <>
            <article>
                <h3>Found in:</h3>
                {birds.map((bird) => {
                    return (
                        <section key={`bird--${bird.id}`}>
                            <select>
                                <option>Found in:</option>
                                {birds.map(bird => (<option
                                    key={bird.id}
                                    value={bird.id}
                                >
                                    {bird.location.state}
                                </option>))}
                            </select>
                        </section>
                    )
                })}

            </article>
        </>
    );

};