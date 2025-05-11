import { useState } from "react";
import searchIcon from "../assets/search-icon.svg"
import axios from "axios"

const Search = ({setWeatherDetails}) => {
  const [search, setSearch] = useState("");

  function handleInputChange(e) {
    setSearch(e.target.value);
    setWeatherDetails(null);
  }
  
  async function handleKeyDown(e) {
    if(e.key !== "Enter") return;

    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: {q: search},
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setWeatherDetails(response.data);
    } catch (error) {
      setWeatherDetails("");
      console.log(error, "No matching location found.");
    }

  }
  

  return (
    <div className="search-section">
      <div className="search-container">
        <img src={searchIcon} alt="search-icon" />
        <input type="text" placeholder="Search for a city" onChange={handleInputChange} onKeyDown={handleKeyDown} />
      </div>
    </div>
  );
};

export default Search;
