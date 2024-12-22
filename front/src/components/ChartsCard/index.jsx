import PropTypes from 'prop-types'

import './style.scss'

function ChartsCard({ className, content }) {
    return <div className={'charts-card ' + className}>{content}</div>
}

ChartsCard.propTypes = {
    className: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
}

export default ChartsCard