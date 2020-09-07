import React, { Component } from "react";
import './SideBar.css';
import miaImmagine from "./immagine.jpg";

class SideBar extends React.Component {
    
        constructor(props)
        {
            super(props)  ;
        }
    render() {
        return (
            <nav id="menu">
                <div className="sidebar row">
                    <div className="sidebar-content text-center">
                        <div className="sidebarImg text-center">
                        <img src={miaImmagine} className="img-circle"/>
                        <h3>Antonietta Brenga</h3></div>
                    </div>
                    <div className="sidebar-wrapper">
                        <ul className="sidebar-nav">
                            <li>
                                Riguardo me
                            </li>
                            <li>
                                il mio blog
                            </li>
                            <li>
                                Contatti
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        );
    }
}


export default SideBar;