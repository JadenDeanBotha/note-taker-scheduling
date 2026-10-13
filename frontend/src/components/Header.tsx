import './Header.css';

type HeaderProps = {
  crumb: string
}

function Header({crumb}: HeaderProps) {
  return (
    <header className="header">
      <button type='button' className='header__nav' aria-label='Open Menu'>
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill='none'
          stroke='currentColor'
          strokeWidth='2.2'
          strokeLinecap='round'
          aria-hidden='true'
        >
          <path d='M4 7h16M4 12h16M4 17h16' />
        </svg>
      </button>
      <span className='header__title'>Today</span>
      <span className='header__crumb'>{crumb}</span>
    </header>
  )
}

export default Header;