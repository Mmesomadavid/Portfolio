import React from 'react';
import "./about.css";
import Image from "../../assets/profile1.png"; // Rename the variable to 'Avatar'
import AboutBox from "./AboutBox";

const AboutSection = () => { // Change the component name to 'AboutSection'
    return (
        <section className="about container section" id='about'>
            <h2 className="section__title">About Me</h2>
            {/* <p>In this section, you'll find all you need to know about me</p> */}

            <div className='about__container grid'>
                <img src={Image} alt="" className="about__img" /> {/* Use 'Avatar' instead of 'About' */}

                <div className='about__data grid'>
                    <div className="about__info">
                        <p className="about__description">My name is Chukwunoyelu Mmesoma David, an Innovative and passion driven DevOps and Cloud Engineer passionate about steering digital transformation initiatives. With a robust background in architecting scalable solutions, I specialize in optimizing operations through DevOps methodologies. My expertise lies in seamlessly bridging the gap between development and operations, creating efficient and reliable infrastructure in cloud environments. </p>
                        <a href="" className="btn">Download CV</a>
                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development"></span>
                            </div>
                        </div>


                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">Docker</h3>
                                <span className="skills__number">100%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage docker"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">Jenkins</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage jenkins"></span>
                            </div>
                        </div>


                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">Kubernetes (K8S)</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage kubernetes"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">Ansible</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ansible"></span>
                            </div>
                        </div>


                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">Terraform</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage terraform"></span>
                            </div>
                        </div>



                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">Git</h3>
                                <span className="skills__number">100%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage git"></span>
                            </div>
                        </div>



                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">AWS</h3>
                                <span className="skills__number">95%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage aws"></span>
                            </div>
                        </div>



                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">Microsoft Azure</h3>
                                <span className="skills__number">86%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage microsoft"></span>
                            </div>
                        </div>



                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">Google cloud platform(GCP)</h3>
                                <span className="skills__number">89%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage google"></span>
                            </div>
                        </div>



                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">Prometheus & Grafana</h3>
                                <span className="skills__number">70%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage grafana"></span>
                            </div>
                        </div>




                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">ELK</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage elk"></span>
                            </div>
                        </div>



                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">React</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage react"></span>
                            </div>
                        </div>



                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">Python</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage python"></span>
                            </div>
                        </div>



                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">Django</h3>
                                <span className="skills__number">70%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage django"></span>
                            </div>
                        </div>



                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">CSS</h3>
                                <span className="skills__number">100%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage  css"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            <AboutBox />
        </section>
    )
}

export default AboutSection; // Export the updated component name 'AboutSection'
