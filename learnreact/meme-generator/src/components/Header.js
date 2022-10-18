import React from 'react';
import trollface from '../images/troll-face.png';
import "../styles/header.css";



export default function Header() {
    return (
        <header className="header">
            <img src={trollface} width="60px" height="30px"/>
            <h2>Header component</h2>
            <h4>React Course - Project 3</h4>
        </header>
    )
}