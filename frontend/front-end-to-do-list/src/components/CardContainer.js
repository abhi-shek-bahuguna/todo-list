import React, { useState } from "react";
import FloatingButton from './FloatingButton';
import Card from './Card'

const CardContainer = () => {
    const [cards, setCards] = useState([]);

    const addCard = () => {
        const newCard = {
            id: cards.length + 1,
            text: [new Date().toLocaleDateString(), `This is card number ${cards.length + 1}`]
        }
        setCards([...cards, newCard])
        // console.log("card add called");
    }

    const deleteCard = (id) => {
        setCards(cards.filter((card) => card.id !== id))
    }
    const parentContainerStyle = {
        width: "100%",
        height: "100%",
        margin: "10px"
    }
    const cardContainerStyle = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        height: "100%",
        maxHeight: "500px",
        overflowY: "auto",
        boxShadow: "inset 4px 0 6px rgba(0, 0, 0, 0.1), inset -4px 0 6px rgba(0, 0, 0, 0.1)"
    }
    const floatingButtonContainerStyle = {
        position: "fixed",
        right: "20px",
        bottom: "20px"
    }
    return (
        <div style={parentContainerStyle}>
            <div style={cardContainerStyle}>
                {cards.map((card) => (
                    <Card text={card.text} id={card.id} deleteCard={deleteCard} />
                ))}
            </div>
            <div style={floatingButtonContainerStyle}>
                <FloatingButton onClick={addCard} />
            </div>
        </div>
    );
}

export default CardContainer;