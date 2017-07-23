import React from 'react'
import { render } from 'react-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ProfileComponent from './ProfileComponent.jsx'
import TweetsComponent from './TweetsComponent.jsx'

class BodyComponent extends React.Component {

	render() {
		if(this.props.appState === null) {
			return(
				<div className='body-component'>
					<div className='empty-body'> 
						<span> 
							No users to display. Please click on user 1 or user 2 on the top left...
						</span>
					</div>
				</div>
			);
		}
		return (

			<div className='body-component'>
				<ProfileComponent />
				<TweetsComponent />
			</div>
		)
	}

}


function mapStateToProps(state) {
	return {
		appState: state.userReducer
	}
}

export default connect(mapStateToProps)(BodyComponent)