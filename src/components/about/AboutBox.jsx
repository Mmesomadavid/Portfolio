import React from 'react';
import "./about.css";


const AboutBox  = () => {
    return (
        <div className="about__boxes grid">
            <div className='about__box'>
                <i className='about__icon icon-fire'></i>

                <div>
                    <h3 className='about__title'>40</h3>
                    <span className='about__subtitle'>Projects Completed</span>
                </div>
            </div>

            <div className='about__box'>
                <i className='about__icon icon-cup'></i>

                <div>
                    <h3 className='about__title'>15</h3>
                    <span className='about__subtitle'>Coffee times</span>
                </div>
            </div>

            <div className='about__box'>
                <i className='about__icon icon-people'></i>

                <div>
                    <h3 className='about__title'>10</h3>
                    <span className='about__subtitle'>Happy Clients</span>
                </div>
            </div>

            <div className='about__box'>
                <i className='about__icon icon-phone'></i>

                <div>
                    <h3 className='about__title'>24</h3>
                    <span className='about__subtitle'>Available Hours</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox;