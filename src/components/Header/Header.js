import { Link } from "react-router-dom";
import './Header.css'
import Logo from '../../img/brain.png'

const Header = () => {
  return (
    <div className='header'>
      <img className='header__img' src={Logo} alt='quiz logo'/>
      <Link to='/' className='header__title'>
        Quiz
      </Link>
    </div>
  )
}

export default Header;