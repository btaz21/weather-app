import { HiMagnifyingGlass } from 'react-icons/hi2';
import '../css/SearchBar.css';
import useInputState from '../hooks/useInputState';

interface Props {
  submitForm: (street: string, zip: string) => void;
}

const SearchBar = ({ submitForm }: Props) => {
  const [address, handleAddressChange] = useInputState('');
  const [zip, handleZipChange] = useInputState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const formatted = address.split(',');
    const street = formatted[0].split(' ').join('+');
    const zipCode = formatted[1];
    console.log(street);
    console.log(zipCode);

    // console.log(address);

    submitForm(street, zipCode);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-box d-flex align-items-center justify-content-end">
        <input
          className="search-text"
          type="text"
          value={address}
          onChange={handleAddressChange}
          placeholder="i.e. 922 Mercedes Blvd, 60660"
        />
        <div className="search-btn">
          <HiMagnifyingGlass />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
