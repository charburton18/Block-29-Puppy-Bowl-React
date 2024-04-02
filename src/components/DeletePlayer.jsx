import { API_URL_BASE } from "./SinglePlayer"


const DeletePlayer = ({ player, fetchAllPlayers }) => {

    const handleClick = async () => {
      try {
        console.log(player.name);
        const response = await fetch(
          `${API_URL_BASE}/players/${player.id}`,
          {
            method: 'DELETE',
          }
        );
        const result = await response.json();
        console.log(result);
        await fetchAllPlayers();
      } catch (err) {
        console.error(err);
      }
    }
  return (
    <button onClick={handleClick}>Delete Player</button>
  )
}

export default DeletePlayer