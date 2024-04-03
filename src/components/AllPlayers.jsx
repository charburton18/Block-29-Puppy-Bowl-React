import { useState, useEffect } from 'react'
import SinglePlayer from './SinglePlayer'
import DeletePlayer from './DeletePlayer'
import AddPlayerForm from './AddPlayerForm'
import { Link } from 'react-router-dom'

const API_URL_BASE = 'https://fsa-puppy-bowl.herokuapp.com/api/CHAR'

const AllPlayers = ({player, setPlayer}) => {
  const [playerArr, setPlayerArr] = useState([]);
  // const [playersToDisplay, setPlayersToDisplay] = useState([])

  // async fetch function grabs player Array from API
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
  useEffect(() => {
    fetchAllPlayers();
  }, []); // if dependency array is empty, calls the first argument(function) once and only once
  return (
    <>
      <div>
        <AddPlayerForm fetchAllPlayers={fetchAllPlayers} />
        {
            playerArr.map((currentPlayer) => {
              return (
                <div>
                  <p>{currentPlayer.name}</p>
                  <Link to={`/player/${currentPlayer.id}`}>
                    <button onClick={(e) => {
                      setPlayer(currentPlayer);
                    }
                    }>More Details</button>
                  </Link>
                  <DeletePlayer player={currentPlayer} fetchAllPlayers={fetchAllPlayers} />
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

export default AllPlayers