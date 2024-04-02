import { useState } from 'react'
import './App.css'
import AllPlayers from './components/AllPlayers'
import AddPlayerForm from './components/AddPlayerForm'
// import SearchBar from './components/SearchBar'

function App() {
  return (
    <>
      {/* <SearchBar playerList={playerList} setPlayerList={setPlayerList}/> */}
      <AddPlayerForm />
      <AllPlayers /> 
    </>
  )
}

export default App