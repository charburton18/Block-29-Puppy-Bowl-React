import SinglePlayer from '../components/SinglePlayer'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const PlayerPage = () => {

  const [playerDetails, setPlayerDetails] = useState({});

  const playerId = useParams().id; 

  const fetchPlayerDetails = async () => {
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/CHAR/players/${playerId}`
      );
      const result = await response.json();
      setPlayerDetails(result.data.player)
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => { fetchPlayerDetails() }, [])

  return (
    <SinglePlayer player={playerDetails} setPlayer={setPlayerDetails} />
  )
}

export default PlayerPage