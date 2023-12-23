import React from 'react';
import "./home.css";
import Me from "../../assets/avatar.png"
import HeaderSocials from './HeaderSocials';
import ScrollDown from "./ScrollDown"; 


const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img" />
                <h1 className="home_name">Chukwunoyelu Mmesoma</h1>
                <span className="home__education">DevOps Engineer | Infrastructure Engineer</span>

                <HeaderSocials />

                <a href="https://calendly.com/chukwunoyelummesoma1/interview-recruiters-and-potential-clients" className="btn"> Hire Me / Schedule Meeting</a>
                <ScrollDown />
            </div>
        </section>
    )
}

export default Home;