import React, { useState } from "react";

const FloatingButton = ({ pageId, addAllCard }) => {
    const [isClicked, setIsClicked] = useState(false);

    const buttonStyle = {
        height: "60px",
        width: "60px",
        background:"linear-gradient(to top right,rgba(98, 255, 0), #0072ff)",
        transform: isClicked ? "scale(.9)" : "scale(1.1)",
        color: "white",
        borderRadius: "30px",
        border: "none",
        marginRight: "40px",
        marginBottom: "40px",
        cursor: "pointer",
        boxShadow: "-2px 2px 1px rgba(0, 0, 0, 0.32)",
        transition: "background 0.9s ease, transform 0.2s ease-in-out"
    }

    const handleMouseEnter = (e) => {
        e.target.style.background = "linear-gradient(to top right,rgba(98, 255, 0), #0072ff)";
        e.target.style.transform = "scale(1.1)";
    }

    const handleMouseLeave = (e) => {
        e.target.style.background ="linear-gradient(to top right, #0072ff,rgba(98, 255, 0))";
        e.target.style.transform = "scale(1)";
    }

    const handleMouseUp = () => {
        setIsClicked(false);
    }

    const handleMouseDown = () => {
        setIsClicked(true);
    }

    return (
        <button style={buttonStyle}
            onClick={()=>addAllCard(pageId)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseDown={handleMouseDown}>+</button>
    )
}

export default FloatingButton;