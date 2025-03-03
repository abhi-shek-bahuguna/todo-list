import React, { useState } from "react";

const TopBar = () => {
    const parentDivStyle = {
        width: "100%",
        height: "50px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        backgroundColor: "rgba(127, 48, 170, 0.93)",
        color: "white"
    }
    return (
        <div style={parentDivStyle}>
            <div>Todo List</div>
        </div>
    );
}

export default TopBar;