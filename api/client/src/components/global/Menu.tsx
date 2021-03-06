import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootStore } from '../../utils/TypeScript'
import { logout } from '../../redux/actions/authAction'

const Menu = () => {
  const { auth } = useSelector((state: RootStore) => state)
  const dispatch = useDispatch()

  const { pathname } = useLocation()

  const bfLoginLinks = [
    { label: 'Login', path: '/login' },
    { label: 'Register', path: '/register' }
  ]

  const afLoginLinks = [
    { label: 'Home', path: '/' },
    { label: 'CreateBlog', path: '/create_blog' }
  ]

  const navLinks = auth.access_token ? afLoginLinks : bfLoginLinks
  
  const isActive = (pn: string) => {
    if(pn === pathname) return 'active';
  }

  return (
    <ul className="navbar-nav mx-auto mt-2">
      {
        navLinks.map((link, index) => (
          <li key={index} className={`nav-item ${isActive(link.path)} ms-3`}>
            <Link className="headera nav-link fw-bold " to={link.path}>{link.label}</Link>
          </li>
        ))
      }

      {
        auth.user?.role === 'admin' &&
        <li className={`nav-item ${isActive("/category")} ms-3`}>
          <Link to="/category" className="headera nav-link fw-bold">Category</Link>
        </li>
      }
      
      {
        auth.user &&
        <li className="nav-item dropdown ms-3">
          <span className="nav-link" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={auth.user.avatar} alt="avatar" className="avatar" />
          </span>

          <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{position: "absolute",left: "-20px", minWidth:"0"}}>
            <li>
              <Link className="dropdown-item dropdown-menu-right" 
              to={`/profile/${auth.user._id}`}
              >
                Profile
              </Link>
            </li>

            <li><hr className="dropdown-divider" /></li>

            <li>
              <Link className="dropdown-item" to="/"
              onClick={() => dispatch(logout())}>
                Logout
              </Link>
            </li>

          </ul>
        </li>
      }
      
    </ul>
  )
}

export default Menu
