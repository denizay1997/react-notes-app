import { MdDarkMode } from "react-icons/md";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <MdDarkMode
        className="header-icon"
        size="1.3rem"
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
      />
    </div>
  );
};

export default Header;
