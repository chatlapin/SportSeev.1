import PropTypes from 'prop-types'

import './style.scss'

function SidebarButton({ logo }) {
    return (
        <button className="sidebar-button">
            <img src={logo} alt="" className="sidebar-button-logo" />
        </button>
    )
}

SidebarButton.propTypes = {
    logo: PropTypes.string.isRequired,
}

export default SidebarButton