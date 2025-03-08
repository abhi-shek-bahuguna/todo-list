import React, { useSate } from "react";

const SideBar = ({setCurrentTabOnScreen}) => {
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

    const navItemStyle ={
        width:"100%",
        cursor:"pointer"
    }

    const handleMouseEnter= (e) =>{
        e.target.style.backgroundColor= "rgba(124, 108, 173, 0.91)"
    }
    const handleMouseLeave=(e)=>{
        e.target.style.backgroundColor= "rgba(85, 42, 212, 0.91)"
    }
    return (
        <div style={sideBarContainerStyle}>
            <div style={navItemStyle}
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}
                 onClick={ () => setCurrentTabOnScreen(0)}>Hi User</div>
            <div style={dividerStyle}></div>
            <div style={navItemStyle}
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}
                 onClick={ () => setCurrentTabOnScreen(1)}>Search</div>
            <div style={dividerStyle}></div>
            <div style={navItemStyle}
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}
                 onClick={ () => setCurrentTabOnScreen(2)}>Today's Tasks</div>
            <div style={dividerStyle}></div>
            <div style={navItemStyle}
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}
                 onClick={ () => setCurrentTabOnScreen(3)}>Upcoming Tasks</div>
            <div style={dividerStyle}></div>
        </div>
    );
}

export default SideBar;