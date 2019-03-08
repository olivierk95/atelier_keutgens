import React from "react";

export default function BurgerIcon(props) {
    let burger;
    let bar1;
    let bar2;
    let bar3;

    if (props.toggle) {
        burger = {
            transform: "translate(-.5rem, 0)",
        };
        bar1 = {
            transform: "rotate(-45deg)",
            transformOrigin: "top right",
        };
        bar2 = {
            opacity: "0",
        };
        bar3 = {
            transform: "rotate(45deg)",
            transformOrigin: "bottom right",
        };
    }

    return (
        <div style={burger} className="burger-icon">
            <div className="burger-bar" style={bar1}></div>
            <div className="burger-bar" style={bar2}></div>
            <div className="burger-bar" style={bar3}></div>
        </div>
    );
}   