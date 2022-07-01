import './Header.scss'
import { Link } from 'react-scroll';
import Button from '../Button/Button';
import logo from '../../assets/images/logo.svg'

const Header = () => {
  const onVievMenu = () => {
    if (window.screen.width <= 600) {
      const header = document.querySelector('.js-header')
      const body = document.body
  
      header?.classList.toggle('open')
      body.classList.toggle('no-scroll')
    }
  }

  const closeHeader = () => {
    const body = document.body
    const header = document.querySelector('.js-header')

    if (header && body.classList.contains('no-scroll') && header.classList.contains('open')) {
      body.classList.remove('no-scroll')
      header.classList.remove('open')
    }
  }
  
  return (
    <header className='header js-header'>
      <nav className='header__menu'>
        <img src={logo} alt='logo' className='header__logo' onClick={onVievMenu}/>
        <ul className='header__link-list'>
          <li className='header__link'>
            <Link
              to='collection'
              smooth={true}
              offset={-100}
              className='header__about-me'
              href='/mock-address/Collection'
              onClick={closeHeader}
            >
              Collection
            </Link>
          </li>
          <li className='header__link'>
            <Link
              to='content'
              smooth={true}
              className='header__job-opening'
              href='/mock-address/Content'
              onClick={closeHeader}
            >
              Content
            </Link>
          </li>
          <li className='header__link'>
            <Link
              to='roadmap'
              smooth={true}
              offset={-100}
              className='header__news'
              href='/mock-address/Roadmap'
              onClick={closeHeader}
            >
              Roadmap
            </Link>
          </li> 
          <li className='header__link'>
            <Link
              to='team'
              smooth={true}
              className='header__team'
              href='/mock-address/Team'
              onClick={closeHeader}
            >
              Team
            </Link>
          </li> 
        </ul>
        <Button text='OpenSea' />
      </nav>
    </header>
  );
}

export default Header;
