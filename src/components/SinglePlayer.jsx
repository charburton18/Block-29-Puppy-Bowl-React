import {useState} from 'react'
import AllPlayers from './AllPlayers.jsx'

const API_URL_BASE = 'https://fsa-puppy-bowl.herokuapp.com/api/CHAR'
const SinglePlayer = ({player, setPlayer}) => {
  // const [playerArr, setPlayerArr] = useState([]);
  // setPlayerArr([])
  return (
    <>
      <h2>{player.name}</h2>
      <img src={player.imageUrl}></img>
      <h2>{player.breed}</h2>
      <h2>{player.teamId}</h2>
      <button onClick={() => (setPlayer({}))}>Back</button>
    </>
  )
}

export default SinglePlayer