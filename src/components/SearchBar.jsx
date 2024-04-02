// import { useState, useEffect } from 'react'

// const SearchBar = ({playerList, setPlayersToDisplay}) => {

//   const [searchParam, setSearchParam] = useState();
  
//   useEffect(()=>{
//       const filteredList = playerList.filter((player)=>{
//         player.name.toLowerCase().includes(searchParam);
//       });
//       console.log(filteredList)
//       setPlayersToDisplay(filteredList);
//   }, [searchParam])

//   return (
//     <>
//       <label>
//           Search:
//         <input 
//           type="text" 
//           placeholder="search" 
//           onChange={(e) => {
//             setSearchParam(e.target.value.toLowerCase());
//           }}
//           />
//       </label>
//     </>
//   )
// }

// export default SearchBar