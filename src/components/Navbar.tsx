interface NavbarProps {
  currentPage: string;
  handleNavClick: (page: string) => () => void;
}

export function Navbar({ currentPage, handleNavClick }: NavbarProps) {
  return (
    <nav className='navbar'>
      <a href='https://ccrsxx.github.io/restaurant-page' className='nav-header'>
        Delicious Ramen
      </a>
      <ul className='nav-links'>
        <li>
          <button
            className={
              currentPage === 'home' ? 'nav-button active' : 'nav-button'
            }
            type='button'
            onClick={handleNavClick('home')}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className={
              currentPage === 'menu' ? 'nav-button active' : 'nav-button'
            }
            type='button'
            onClick={handleNavClick('menu')}
          >
            Menu
          </button>
        </li>
        <li>
          <button
            className={
              currentPage === 'contact' ? 'nav-button active' : 'nav-button'
            }
            type='button'
            onClick={handleNavClick('contact')}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}
