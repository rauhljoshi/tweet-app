import React from 'react'
import { render } from 'react-dom'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addTweet } from '../actions/appActions.jsx'


class ComposeTweetComponent extends React.Component {

	constructor(props) {
		super(props);
		this.addTweet = this.addTweet.bind(this);
		this.updateTweetLength = this.updateTweetLength.bind(this);
		this.triggerKeyPress = this.triggerKeyPress.bind(this);
	}

	triggerKeyPress(e) {
		if(e.key === 'Enter') {
			e.preventDefault();
			this.dispatchAddTweet(e.target);
		}
	}

	updateTweetLength(e) {
		var element = e.target.nextElementSibling.getElementsByClassName('tweet-length')[0],
			currentLength = element.innerText,
			newLength = parseInt(currentLength) - 1;

		element.innerText = newLength;
	}

	addTweet(e) {
		this.dispatchAddTweet(e.target.parentElement.previousElementSibling);
	}

	dispatchAddTweet(element) {
		let value = element.value;
		if(value.trim() !== '') {
			this.props.addTweet(value);
			element.value = '';
			element.nextElementSibling.getElementsByClassName('tweet-length')[0].innerText = '140';
		}
	}

	render() {
		return (

			<div className='compose-tweet-component'>
				<div className='compose-tweet-wrapper'>
					<textarea rows='4' cols='70' onKeyPress={this.triggerKeyPress} onChange={this.updateTweetLength} placeholder="What's happening?"></textarea>
					<div className='tweet-actions'>
						<span className='tweet-length'>140</span>
						<button className='add-tweet' onClick = {this.addTweet}> Tweet </button>
					</div>
				</div>
			</div>
		)
	}

}
function mapStateToProps(state){
	return {};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		addTweet: addTweet
	}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ComposeTweetComponent)