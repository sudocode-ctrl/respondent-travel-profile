import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo_icon from '../../images/logo_icon.jfif';

const Navbar = () => {




    return (
        <div >
            <div className="container">
                <div className="wrapper">
                    <div className="left">
                        <ul className="title-list">
                            <li className="listItem">
                                <div className="ama-icon">
                                    <img src={logo_icon} className="icon" alt="title_icon" />
                                </div>
                            </li>
                            <li className="listItem title">
                                Transit data
                            </li>

                        </ul>
                    </div>
                    <div className="">
                        <ul className="list">
                            <li className="listItem">
                                <Link to='/'>Home</Link>
                            </li>
                            <li className="listItem">
                                About
                            </li>


                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;
