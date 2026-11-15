import { useEffect, useState } from 'react'
import { menuItems } from '../constants/data'

const getActivePath = () => {
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/'
  const activeItem = menuItems.find((item) => {
    const target = new URL(item.href, window.location.origin)
    return target.pathname === currentPath && target.hash === window.location.hash
  })
  return activeItem ? activeItem.label.toLowerCase() : 'home'
}

const Header = ({ theme, onToggleTheme }) => {
  const [activePath, setActivePath] = useState(getActivePath)

  useEffect(() => {
    const updateActivePath = () => setActivePath(getActivePath())
    window.addEventListener('hashchange', updateActivePath)
    window.addEventListener('popstate', updateActivePath)
    return () => {
      window.removeEventListener('hashchange', updateActivePath)
      window.removeEventListener('popstate', updateActivePath)
    }
  }, [])

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <a className="nav-home" href={menuItems[0].href} aria-label="Yared Kassa home">
          <img src="/yared-logo.png" alt="" />
          <span>~/{activePath}</span>
        </a>
        <div className="nav-links">
          {menuItems.slice(1).map((item) => (
            <a
              href={item.href}
              key={item.href}
              aria-current={activePath === item.label.toLowerCase() ? 'location' : undefined}
            >
              {item.label}
            </a>
          ))}
          <button className="theme-toggle" type="button" onClick={onToggleTheme}>
            [{theme === 'dark' ? 'Light' : 'Dark'}]
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
