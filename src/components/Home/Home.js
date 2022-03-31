import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Typewriter from "typewriter-effect";
import "./Home.css";

const Home = () => {
  
    const [state] = useState({
        title: "Hi,",
        titleTwo: "Welcome to",
        titleThree: "Shoppinggg",
        image: "/images/bg-spiderman/spiderman.png",
    });

    return (
        <div className="home">
            <div className="home-intro">
                <h2>
                    <div className="title">{state.title}</div>
                    <div className="titleTwo">{state.titleTwo}</div>
                    <div className="titleThree">{state.titleThree}</div>
                </h2>
                <div className="text">
                    <Typewriter
                    options={{
                        autoStart: true,
                    loop: true,
                    delay: 40,
                    strings:[
                        "Nguyen Tan Phuc",
                        "Nguyen Tien Dat",
                        "Ngo Minh Khoe"
                    ],    
                
                }}
                />
                </div>
                <div className="contact-me">
                <Link to="/product"><button className="button">Go to Shopping!</button></Link>
                </div>
            </div>
            <div className="home-image">
                <img className="spiderman-image" src={state.image} alt="spiderman" />
            </div>


            
        </div>
    );
};

export default Home
