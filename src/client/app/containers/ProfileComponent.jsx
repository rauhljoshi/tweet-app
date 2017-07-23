import React from 'react'
import { render } from 'react-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class ProfileComponent extends React.Component {


	render() {
		return (

			<div className='profile-component'>
				<span className='user-name'>{this.props.user.user.name}</span>
				<span className='user-handle'>{this.props.user.user.handle}</span>
				<div className='user-description'>
					<div>{this.props.user.user.description}</div>
					<div className='current-location'>
						<i className='fa fa-podcast'></i>
						{this.props.user.user['current-location']}
					</div>
					<div className='date-of-joining'>
						<i className='fa fa-calendar'></i>
						<span>{this.props.user.user['date-of-joining']}</span>
					</div>
				</div>
			</div>
		)
	}

}

function mapStateToProps(state) {
	return {
		user: state.userReducer
	}
}

export default connect(mapStateToProps)(ProfileComponent)