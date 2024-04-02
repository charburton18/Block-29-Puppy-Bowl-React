import {useState, useEffect} from 'react'
import { API_URL_BASE } from './SinglePlayer';

const AddPlayerForm = ({fetchAllPlayers}) => {

  const [playerNameInput, setPlayerNameInput] = useState("");
  const [playerBreedInput, setPlayerBreedInput] = useState("");

  const onPlayerFormSubmit = async (e) => {
    e.preventDefault();
    console.log(playerNameInput, playerBreedInput);
    try {
      const response = await fetch(
        `${API_URL_BASE}/players`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: playerNameInput,
            breed: playerBreedInput,
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      fetchAllPlayers();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={(onPlayerFormSubmit)}>
      <input placeholder="player name" name="newPlayerName" onChange={(event) => setPlayerNameInput(event.target.value)}/>
      <input placeholder="player breed" name="newPlayerBreed" onChange={(event) => setPlayerBreedInput(event.target.value)}/>
      <button>Submit New Player</button>
    </form>
  
  )
}

export default AddPlayerForm