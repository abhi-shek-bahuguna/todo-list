import React, {useState} from "react";

const FloatingButton = ({onClick}) => {
    const [isClicked,setIsClicked] = useState(false);

    const buttonStyle={
        height:"50px",
        width:"50px",
        backgroundColor: isClicked?"rgba(139, 73, 184, 0.87)":"rgba(102, 13, 161, 0.87)",
        transform: isClicked?"scale(.9)":"scale(1.1)",
        color:"white",
        borderRadius:"25px",
        border:"none",
        marginRight:"40px",
        marginBottom:"40px",
        cursor:"pointer",
        boxShadow:"-2px 2px 1px rgba(0, 0, 0, 0.32)",
        transition: "background-color 0.3s ease, transform 0.2s ease-in-out"
    }

    const handleMouseEnter = (e) => {
        e.target.style.backgroundColor = "rgba(102, 13, 161, 0.87)";
        e.target.style.transform = "scale(1.1)";
    }
    
    const handleMouseLeave = (e) => {
        e.target.style.backgroundColor = "rgba(139, 73, 184, 0.87)";
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
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}>+</button>
    )
}

export default FloatingButton;