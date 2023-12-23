import React from 'react';
import "./service.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
     {
        id: 1,
        image: Image1,
        title: "DevOps Engineer",
        description: 
        "Cloud/DevOps engineer with experience using linux, software architecture design, kubernetes, systems monitoring, processes automation, IAC and other cool stuff in the cloud. Also has a good hand with AWS and GCP"
     },
     {
        id: 2,
        image: Image2,
        title: "Site Reliability Engineer",
        description: 
        "Do you need a Site Reliability Engineer in your core infrastructure team? Reach out! Site Reliability Engineers ensure systems are reliable, scalable, and efficient. From monitoring and incident response to automation and performance optimization, I keep your system resilient, allowing your team to focus on innovation and growth."
     },
     {
        id: 3,
        image: Image3,
        title: "Infrastructure Engineer",
        description: 
        "Looking to optimize your infrastructure? I specialize in designing, implementing, and maintaining robust and scalable infrastructure solutions. Whether it's on-premises, in the cloud, or hybrid setups, i ensure smooth and seamless operations. Leverage my expertise to build a resilient foundation for your applications and business growth."
     },
]

const Service = () => {
    return (
        <section className='services container section' id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({id, image, title, description}) => {
                    return (
                        <div className='services__card' key={id}>
                            <img src={image} alt="" className="services__img" undraggable="false"/>

                            <h3 className='services__title'>{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
};

export default Service;