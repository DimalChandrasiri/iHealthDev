import { useState } from "react";
import "./index.css";

import img from "src/Assets/Images/business-meeting2.png";

const Hero = () => {


    return (
        <section className="Hero-image">
            <div className="container"> <div className="image-page">
                <img src={img} className="img-holder" alt="meeting" />
            </div>

            </div>


        </section>
    )
};

export default Hero;
