import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import FloatingButton from './components/FloatingButton';
import CardContainer from './components/CardContainer'
import { useState } from 'react';

function App() {

  const [cards, setCards] = useState([]); // Store multiple cards

  const addCard = () => {
    setCards([...cards, `Card ${cards.length + 1}`]); // Add a new card
  };

  const parentDivStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    // backgroundColor:"red"
  }

  const bodyDivStyle = {
    height: "100%",
    display: "flex",
    flexDirection: "row",
  }

  const floatingButtonContainerStyle = {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end"
  }

  const cardContainerStyle = {
    display: "flex",
    width: "100%",
    // backgroundColor:"red",
    flexDirection: "row",
    flexWrap: "wrap",
    maxHeight: "100%", // Fixed height to enable scrolling
    overflowY: "auto",
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "inset 0 4px 6px rgba(0, 0, 0, 0.1), inset 0 -4px 6px rgba(0, 0, 0, 0.1)",
  }
  return (
    <div style={parentDivStyle}>
      <TopBar />
      <div style={bodyDivStyle}>
        <SideBar />
        <CardContainer />
      </div>
    </div>
  );
}

export default App;
