import React, { useState } from "react";

const Card = () =>{
    const cardContainerStyle= {
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        width:"250px",
        height:"300px",
        boxShadow:"-10px 10px 10px rgba(0,0,0,0.3)",
        borderRadius:"10px",
        margin:"20px",
        padding:"10px"
    }

    const dateContainerStyle = {
        flex:2
    }
    const contentContainerStyle = {
        flex:6
    }
    const buttonContainerStyle ={
        width:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-end",
        flex:2
    }
    const buttonStyle = {
        height:"40px",
        width:"40px",
        color:"rgba(0,3,0,.3)",
        borderRadius:"20px",
        outline:"none",
        marginRight:"20px"
    }
    return(
        <div style={cardContainerStyle}>
        <div style={dateContainerStyle}>17/01/22</div>
        <div style={contentContainerStyle}>This is your cards asdasd asdgasfg asfgasfg asfgasfgasdfsadf</div>
        <div style={buttonContainerStyle}>
            <button style={buttonStyle}>+</button>
        </div>
        </div>
    )
}

export default Card;