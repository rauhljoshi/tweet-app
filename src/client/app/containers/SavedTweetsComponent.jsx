import React from 'react'
import { render } from 'react-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class SavedTweetsComponent extends React.Component {

	getTweets() {
		const tweets = this.props.user.user.tweets;
		var img_src = this.props.user.user['profile-picture'];
		return tweets.map((item, index) => {
			return(<div className="tweet" key={index}>
						<img className="img-circle" src={img_src} />
						<div className='details'>
							<span className='user-name'> {this.props.user.user.name} </span>
							<span className='user-handle'> {this.props.user.userhandle} </span>
						<div className='content'>
							{item}
						</div>
					</div>
				</div>)
		})
	}

	render() {
		if(this.props.user.user.tweets.length === 0) {
			return (
			<div className='saved-tweets-component'>
				<h5 className='no-tweets'> You have no tweets... </h5>
			</div>
			)
		}
		return (

			<div className='saved-tweets-component'>
			{this.getTweets()}
			</div>
		)
	}

}
function mapStateToProps(state) {
	return {
		user: state.userReducer
	}
}

export default connect(mapStateToProps)(SavedTweetsComponent)
