import React from "react";
import UserBlack from '../svg-icons/user-icon-black.svg'

const UserProfile = ({page}) =>{
    const userImageStyle={
        height:"300px",
        width:"300px"
    }
    const imageContainerStyle={
        display:"flex",
        width:"100%",
        alignItems:"center",
        justifyContent:"center"
    }
    const parentContainerStyle={
        // width:"100%",
        // backgroundColor:"red"
    }
    return (
        <div style={parentContainerStyle}>
            <h2>{page}</h2>
                <div style={imageContainerStyle}>
                    <img src={UserBlack} style={userImageStyle}/>
                </div>
        </div>
    )
}

export default UserProfile;