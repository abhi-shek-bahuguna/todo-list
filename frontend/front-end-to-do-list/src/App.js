// App.js
import './App.css';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import CardContainer from './components/CardContainer'
import { useState, useEffect } from 'react';
import UserProfile from './components/UserProfile';
import SearchPage from './components/Search';

function App() {
  const tabs =[
    {
      index: 0,
      pageName: "User Profile",
      component: UserProfile
    },
    {
      index: 1,
      pageName: "Search",
      component: SearchPage
    },
    {
      index: 2,
      pageName: "TODO Today",
      component: CardContainer
    },
    {
      index: 3,
      pageName: "TODO Upcoming",
      component: CardContainer
    }];

  const [currentTab,setCurrentTab] =useState(0);

  const setCurrentTabOnScreen=(index)=>{
    setCurrentTab(index)
  }
  const ActiveTabComponent = tabs[currentTab].component;

  const [allCards,setAllCards] = useState([[],[],[],[]]);
  const [cards,setCards] = useState([]);

  const addCard = () => {
    const newCard = {
      id:cards.length+1,
      text:[`${new Date().toLocaleDateString()}`,`This is card ${cards.length+1}`]
          }
    setCards([...cards,newCard]);
  }

  const addAllCard = (index) => {
    setAllCards(prevAllCards =>{
    const newAllCards=[...prevAllCards];
     // Ensure the index exists and is an array
     if (!Array.isArray(newAllCards[index])) {
      newAllCards[index] = []; // Initialize as an empty array if undefined
    }
    const newCards=[...newAllCards[index]]
    const newCard = {
      id:newCards.length+1,
      text:[`${new Date().toLocaleDateString()}`,`This is card ${newCards.length+1}`]
    }
    newAllCards[index]=[...newCards,newCard];
    return newAllCards;
  })
  }

  const deleteAllCard = (index1,index2) => {
    setAllCards(prevAllCards=>{
      const newAllCards=[...prevAllCards];
      const newCards=newAllCards[index1].filter( card=>
        card.id!=index2
      );
      newAllCards[index1]=newCards;
      return newAllCards;
    })
  }

  const parentDivStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  }

  const bodyDivStyle = {
    height: "100%",
    display: "flex",
    flexDirection: "row",
  }


  return (
    <div style={parentDivStyle}>
      <TopBar />
      <div style={bodyDivStyle}>
        <SideBar setCurrentTabOnScreen={setCurrentTabOnScreen} />
        <div style={{width:"100%"}}>
          <ActiveTabComponent page={tabs[currentTab].pageName} pageId={tabs[currentTab].index} cards={allCards[currentTab]} addAllCard={addAllCard} deleteAllCard={deleteAllCard}/>
        </div>
      </div>
    </div>
  );
}

export default App;