import PropTypes from 'prop-types'

import './style.scss'

function Card({ userKeyData, unit, subtitle, className, logo }) {
	return (
		<div className="card ">
			<div className={'card-icon-wrapper ' + className}>
				<img src={logo} alt="" className="card-icon center" />
			</div>
			<div className="card-data-wrapper">
				<p className="card-title">
					{userKeyData.toLocaleString('en-US')}
					{unit}
				</p>
				<p className="card-subtitle">{subtitle}</p>
			</div>
		</div>
	)
}

Card.propTypes = {
	userKeyData: PropTypes.number.isRequired,
	unit: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	logo: PropTypes.string.isRequired,
}

export default Card