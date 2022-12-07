import { FormEvent, Dispatch, SetStateAction } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import useInputState from '../hooks/useInputState';
import '../css/SearchBar.css';

interface Props {
  submitForm: (street: string, zip: string) => void;
  setErrorMsg: Dispatch<SetStateAction<boolean>>;
}

const SearchBar = ({ submitForm, setErrorMsg }: Props) => {
  const [address, handleAddressChange] = useInputState('');
  const [zip, handleZipChange] = useInputState('');

  const isValid = () => {
    if (!address || !zip) return false;
    return true;
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (isValid()) {
      const street = address.split(' ').join('+');
      const zipCode = zip.trim();
      submitForm(street, zipCode);
    } else {
      setErrorMsg(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-box d-flex align-items-center justify-content-end">
        <input
          className="search-text"
          type="text"
          value={address}
          onChange={handleAddressChange}
          placeholder="Street Address"
        />
        <input
          className="search-text"
          type="text"
          value={zip}
          onChange={handleZipChange}
          placeholder="Zip Code"
        />
        <button type="submit" className="visually-hidden"></button>

        <div className="search-btn">
          <HiMagnifyingGlass />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
