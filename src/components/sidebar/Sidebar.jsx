import React from 'react';
import './sidebar.css';
import { Resizable } from 'react-resizable';

const Sidebar = () => {
    const onResize = (event, { size }) => {
        // Handle the resizing logic here
        console.log('Resized to:', size);
    };

    return (
        <Resizable
            className="aside resizable"
            defaultSize={{ width: 200, height: '100%' }}
            minConstraints={[100, '100%']}
            maxConstraints={[400, '100%']}
            onResize={onResize}
        >
            <aside className="aside">
                <a href="#home" className="nav__logo">
                    {/* <img src={Logo} alt="logo" /> */}
                </a>

                <nav className="nav">
                    <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="icon-home"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="icon-user-following"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="icon-briefcase"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#Resume" className="nav__link">
                                <i className="icon-graduation"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className="icon-layers"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#blog" className="nav__link">
                                <i className="icon-note"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="icon-bubble"></i>
                            </a>
                        </li>
                    </ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    <span className="copyright"> &copy; 2022 - 2023.</span>
                </div>
            </aside>
        </Resizable>
    );
};

export default Sidebar;
