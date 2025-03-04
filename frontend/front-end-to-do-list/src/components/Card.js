import React, { useState } from "react";
import DeleteIconBlack from '../svg-icons/delete-icon-black.svg';
import DeleteIconYellow from '../svg-icons/delete-icon-yellow.svg';
import DeleteIconRed from '../svg-icons/delete-icon-red.svg';

const Card = ({ id, text, deleteCard }) => {
    const [buttonImage, setButtonImage] = useState(DeleteIconBlack);
    const cardContainerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "220px",
        height: "250px",
        boxShadow: "-10px 10px 10px rgba(0,0,0,0.3)",
        borderRadius: "10px",
        margin: "20px",
        padding: "10px"
    }

    const dateContainerStyle = {
        flex: 2
    }
    const contentContainerStyle = {
        flex: 6
    }
    const buttonContainerStyle = {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        flex: 2
    }
    const buttonStyle = {
        height: "25px",
        width: "25px",
        // color: "rgba(0,3,0,.3)",
        // borderRadius: "20px",
        // outline: "none",
        marginRight: "20px",
        cursor: "pointer"
    }
    const handleMouseEnter = (e) => {
        setButtonImage(DeleteIconRed);
        e.target.style.transform = "scale(1.1)";
    }
    const handleMouseLeave = (e) => {
        setButtonImage(DeleteIconBlack);
        e.target.style.transform = "scale(1)";
    }
    const handleMouseDown = (e) => {
        e.target.style.transform = "scale(1)";
    }
    const handleMouseUp = (e) => {
        e.target.style.transform = "scale(1.1)"
    }
    return (
        <div style={cardContainerStyle}>
            <div style={dateContainerStyle}>{text[0]}</div>
            <div style={contentContainerStyle}>{text[1]}</div>
            <div style={buttonContainerStyle}>
                <img src={buttonImage}
                    style={buttonStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onClick={() => deleteCard(id)}
                />
            </div>
        </div>
    )
}

export default Card;