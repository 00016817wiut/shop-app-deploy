import logo from '../../assets/icons/logo.png';
import "./NavBar.css";


const NavBar = () => {
  return (
      <nav className="nav">
        <div className="nav__container content">
          <a href="#">
            <img  className="nav__logo" src={logo} alt="" />
          </a>
          <ul className="nav__list">
            <li><a href="#" className="nav__list-link">Главная</a></li>
            <li><a href="#" className="nav__list-link nav__link-active">Товары</a></li>
            <li><a href="#" className="nav__list-link">Профиль</a></li>
            <li><a href="#" className="nav__list-link">Корзина</a></li>
          </ul>
        </div>
      </nav>
  )
}
export default NavBar