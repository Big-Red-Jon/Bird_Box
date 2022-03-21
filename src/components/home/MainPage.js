import React, { useContext, useEffect } from "react"
import { BirdContext } from "../birds/BirdProvider.js";
import "./MainPage.css"

export const Homepage = () => {
    const { birds, getBirds } = useContext(BirdContext);

    useEffect(() => {
        getBirds();
    }, []);

    return (
        <>
            <div className="full_home">
                <h1>Welcome to The Bird Box </h1>
                <p>The Bird Box is your one stop place for bird watching enthusiasts.
                    The Bird Box helps make watching easier by removing the need of books and notepads.
                    You simply go watching and find the bird you saw in our database.
                    From there, create a sighting for your profile.
                    You can add the bird along with the state you found it in.
                    You can also add the date to remind yourself when you last saw the species.
                    Finally, our database has pictures of each bird for easy reference. </p>
                <article className="column">
                    {birds && birds.map((bird) => {
                        return (
                            <img className="row" alt="bird" src={bird.bird_img} />
                        )
                    })}

                </article>
            </div>
        </>
    )
}