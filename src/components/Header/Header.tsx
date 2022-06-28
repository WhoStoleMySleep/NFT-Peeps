import './Header.scss'
import Button from '../Button/Button';
import logo from '../../assets/images/logo.svg'

const Header = () => {
  const onVievMenu = () => {
    const header = document.querySelector('.js-header')
    const body = document.body

    header?.classList.toggle('open')
    body.classList.toggle('no-scroll')
  }
  
  return (
    <header className='header js-header'>
      <nav className='header__menu'>
        <img src={logo} alt='logo' className='header__logo' onClick={onVievMenu}/>
        <ul className='header__link-list'>
          <li className='header__link'>
            <a className='header__about-me' href='/mock-address/Collection'>Collection</a>
          </li>
          <li className='header__link'>
            <a className='header__job-opening' href='/mock-address/Content'>Content</a>
          </li>
          <li className='header__link'>
            <a className='header__news' href='/mock-address/Roadmap'>Roadmap</a>
          </li> 
          <li className='header__link'>
            <a className='header__team' href='/mock-address/Team'>Team</a>
          </li> 
        </ul>
        <Button text='OpenSea' />
      </nav>
    </header>
  );
}

export default Header;
