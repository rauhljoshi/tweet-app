import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'

class UserInfoComponent extends React.Component {

	render() {
		var img_src;
		if(this.props.user === null) {
			img_src = "./images/dummy.jpeg";
		} else {
			img_src = this.props.user.user['profile-picture'];
		}
		return (

			<div className='user-info-component'>
				<div className='profile-picture'>
					<img src={img_src} />
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
export default connect(mapStateToProps)(UserInfoComponent);