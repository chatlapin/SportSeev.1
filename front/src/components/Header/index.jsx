import { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'

import { Context } from '../../context'

import logo from '../../assets/logo.svg'

import './style.scss'

function Header() {
    const { userToggle } = useContext(Context)

    let userId = '12'
    if (userToggle) {
        userId = '18'
    }
    if (!userToggle) {
        userId = '12'
    }

    return (
        <header className="nav-wrapper">
            <Link to="/">
                <img
                    src={logo}
                    alt="SportSee Logo"
                    className="nav-logo vertical-center"
                />
            </Link>
            <nav className="nav vertical-center">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'nav-active' : 'nav-link'
                    }
                    to="/"
                >
                    Accueil
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'nav-active' : 'nav-link'
                    }
                    to={`/profil/${userId}`}
                >
                    Profil
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'nav-active' : 'nav-link'
                    }
                    to="/settings"
                >
                    Réglage
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'nav-active' : 'nav-link'
                    }
                    to="/community"
                >
                    Communauté
                </NavLink>
            </nav>
        </header>
    )
}

export default Header