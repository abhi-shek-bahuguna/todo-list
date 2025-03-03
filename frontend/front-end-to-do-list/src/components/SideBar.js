import React, { useSate } from "react";

const SideBar = () => {
    const sideBarContainerStyle = {
        margin: "10px",
        height: "100%",
        width: "200px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(85, 42, 212, 0.91)",
        color: "white"
    }
    const dividerStyle = {
        width: "100%",
        borderBottom: "1px solid white",
        margin: "3px"
    }
    return (
        <div style={sideBarContainerStyle}>
            <div>Hi User</div>
            <div style={dividerStyle}></div>
            <div>Search</div>
            <div style={dividerStyle}></div>
            <div>Today's Tasks</div>
            <div style={dividerStyle}></div>
            <div>Upcoming Tasks</div>
            <div style={dividerStyle}></div>
        </div>
    );
}

export default SideBar;