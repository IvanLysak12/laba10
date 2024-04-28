import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">Головна</Link>
        <Link to="/vertical">Вертикальний світлофор</Link>
        <Link to="/horizontal">Горизонтальний світлофор</Link>
      </nav>
    </>
  );
};

export default Header;
