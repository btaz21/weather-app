import SearchBar from './SearchBar';
import turtledove from '../assets/turtledove.png';

interface Props {
  title: string;
  submitForm: (street: string, zip: string) => void;
}

const Header = ({ title, submitForm }: Props): JSX.Element => {
  return (
    <div className="container-fluid shadow-sm bg-white opacity-75">
      <div className="row align-items-center py-3 px-2">
        <div className="col-7 d-flex align-items-center">
          <img src={turtledove} style={{ height: '70px' }} alt="logo"></img>

          <div className="fs-5">{title}</div>
        </div>
        <div className="col-5">
          <SearchBar submitForm={submitForm} />
        </div>
      </div>
    </div>
  );
};

export default Header;
