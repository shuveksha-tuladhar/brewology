import { FaSearch } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import './SearchBar.css';

export function SearchBar({ searchInput, setSearchInput }) {

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const clearSearchInput = () => {
    setSearchInput("");
  };

  return (
    <>
      <div className="drinksSearch">
        <label htmlFor="search">Search Drinks </label>
        <div className="input-group">
          <FaSearch aria-label="search" />
          <input
            type="text"
            id="search"
            value={searchInput}
            onChange={handleInputChange}
            placeholder="Type to search"
          />

          {searchInput && (
            <button onClick={clearSearchInput} aria-label="clear search">
              <FaDeleteLeft />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
