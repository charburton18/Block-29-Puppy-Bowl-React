import {useState, useEffect} from 'react'
import SinglePlayer from './SinglePlayer';

const API_URL_BASE = 'https://fsa-puppy-bowl.herokuapp.com/api/CHAR'

const AllPlayers = () => {
  const [playerArr, setPlayerArr] = useState([]);
  const [player, setPlayer] = useState({});

  // async fetch function grabs player Array from API
  useEffect(() => {
  const fetchAllPlayers = async () => {
    try {
    const response = await fetch(`${API_URL_BASE}/players`)
    const result = await response.json();
    const playerList = result.data.players;
    console.log(playerList);
    setPlayerArr(playerList);
    }
    catch (error) {
      console.log('error', error);
    }
  }
  fetchAllPlayers()
  }, []); // if dependency array is empty, calls the first argument(function) once and only once
  return (
    <>
      <div>
        {
        player.name ? <SinglePlayer player={player} setPlayer={setPlayer}/> :
          playerArr.map((currentPlayer) => {
            return (
              <div>
                <p>{player?.name}</p>
                <p>{currentPlayer.name}</p>
                <button onClick={(e) => {
                  setPlayer(currentPlayer);}
                }>More Details</button>
              </div>
              )
            })
				}
      </div>
    </>
  )
}

// if clicked player.name exists then render that player.name's detail page <SinglePlayer />
// if player.name does not exist then render the page with names and buttons

//<SinglePlayer
// key={currentPlayer.id}
// playerName={currentPlayer.name}
// playerImage={currentPlayer.imageUrl}
// playerTeamId={currentPlayer.teamId}

export default AllPlayers