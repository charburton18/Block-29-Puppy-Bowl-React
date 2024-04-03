import './App.css'
import AllPlayers from './components/AllPlayers'
import {useState} from 'react'
import SinglePlayer from './components/SinglePlayer'
import AddPlayerForm from './components/AddPlayerForm'
import {Routes, Route} from 'react-router-dom'
import PlayerPage from './pages/PlayerPage'
// import SearchBar from './components/SearchBar'


function App() {
  const [player, setPlayer] = useState({});
  return (
    <>
      <Routes>
        <Route path='/' element={<AllPlayers player={player} setPlayer={setPlayer}/>} />
        <Route path='/player/:id' element={<PlayerPage player={player} setPlayer={setPlayer}/>} />
      </Routes>
      {/* <SearchBar playerList={playerList} setPlayerList={setPlayerList}/> */}
    </>
  )
}

export default App