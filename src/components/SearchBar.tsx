import { HiMagnifyingGlass } from 'react-icons/hi2';
import '../css/SearchBar.css';
const SearchBar = () => {
  return (
    <div className="search-box d-flex align-items-center justify-content-end">
      <input className="search-text" type="text" placeholder="Street Address" />
      <div className="search-btn">
        <HiMagnifyingGlass />
      </div>
    </div>
  );
};

export default SearchBar;
