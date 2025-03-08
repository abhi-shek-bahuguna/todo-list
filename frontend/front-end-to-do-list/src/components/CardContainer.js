import React from "react";
import FloatingButton from './FloatingButton';
import Card from './Card';

const CardContainer = ({ page, pageId, cards, addAllCard, deleteAllCard }) => {
    const parentContainerStyle = {
        width: "100%",
        height: "100%",
        margin: "10px",
    }
    
    const cardContainerStyle = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        height: "100%",
        maxHeight: "500px",
        overflowY: "auto",
        boxShadow: "inset 4px 0 6px rgba(0, 0, 0, 0.1), inset -4px 0 6px rgba(0, 0, 0, 0.1)",
        background: "linear-gradient(to top right,rgba(98, 255, 0, 0.55), #0072ff)",
        borderRadius: "10px"
    }
    
    const floatingButtonContainerStyle = {
        position: "fixed",
        right: "20px",
        bottom: "20px"
    }
    
    return (
        <div style={parentContainerStyle}>
            <h2>{page}</h2>
            <div style={cardContainerStyle}>
                {cards.map((card) => (
                    <Card 
                        key={card.id} 
                        text={card.text} 
                        id={card.id}
                        pageId={pageId} 
                        deleteAllCard={deleteAllCard} 
                    />
                ))}
            </div>
            <div style={floatingButtonContainerStyle}>
                <FloatingButton pageId ={pageId} addAllCard={addAllCard} />
            </div>
        </div>
    );
}

export default CardContainer;