import React from "react";
import SearchBarBlack from '../svg-icons/search-bar-icon-black.svg'
const SearchPage = ({page}) =>{
    const searchBarContainerStyle={
        display:"flex",
        height:"400px",
        justifyContent:"center",
        alignItems:"center"
    }

    const searchBarStyle= {
        display:"flex",
        height:"50px",
        width:"400px",
        flexDirection:"row",
        boxShadow:"2px 2px 5px rgba(0,0,0,.3), -2px -2px 5px rgba(0,0,0,.3)",
        borderRadius:"30px",
        alignItems:"center",
        // justifyContent:"center"
    }

    const searchBarImageStyle={
        flex:"2",
        height:"30px",
        width:"30px"
    }
    const searchBarInputStyle={
        flex:"8",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        height:"100%",
        cursor:"text",
        // backgroundColor:"red"
    }
    return (
        <div>
            <h2>{page}</h2>
            <div style={searchBarContainerStyle}>
                <div style={searchBarStyle}>
                    <img src={SearchBarBlack} style={searchBarImageStyle}/>
                    <div style={searchBarInputStyle}>Search for something...</div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage;