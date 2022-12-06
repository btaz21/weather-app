import SearchBar from './SearchBar';

interface Props {
  title: string;
  submitForm: (street: string, zip: string) => void;
}

const Header = ({ title, submitForm }: Props): JSX.Element => {
  return (
    <div className="container-fluid shadow-sm bg-white opacity-75">
      <div className="row align-items-center py-3 px-2">
        <div className="col-7">
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
