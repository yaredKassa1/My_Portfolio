import { menuItems } from '../constants/data'

const Header = ({ theme, onToggleTheme }) => (
  <header className="site-header">
    <nav className="site-nav" aria-label="Main navigation">
      <a className="nav-home" href="#home" aria-label="Yared Kassa home">~/</a>
      <div className="nav-links">
        {menuItems.slice(1).map((item) => (
          <a href={item.href} key={item.href}>{item.label}</a>
        ))}
        <button className="theme-toggle" type="button" onClick={onToggleTheme}>
          [{theme === 'dark' ? 'Light' : 'Dark'}]
        </button>
      </div>
    </nav>
  </header>
)

export default Header
