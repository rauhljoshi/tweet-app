import React from 'react'
import { render } from 'react-dom'

import { connect } from 'react-redux'

import { fetchUsers } from '../actions/appActions.jsx'


class GlobalMenuComponent extends React.Component {

	constructor(props) {
		super(props)
		this.fetchUsers = this.fetchUsers.bind(this);
	}

	fetchUsers(e) {
		let user_id = e.target.parentElement.id;
		var url;
		if(user_id === 'user_1') {
			url = 'http://59741e60903c110011f56a9a.mockapi.io/users'
		} else {
			url = 'https://api.myjson.com/bins/6fmmb'
		}
		this.props.fetchUsers(url, user_id);
	}

	render() {
		return (

			<div className='global-menu-component'>
				<a id='user_1' onClick={this.fetchUsers}> 
					<i className="fa fa-male" aria-hidden="true"></i>
					<span> User 1 </span>
				</a> 
				<a id='user_2' onClick={this.fetchUsers}> 
					<i className="fa fa-male" aria-hidden="true"></i>
					<span> User 2 </span>
				</a> 
				<span className="fa fa-twitter twitter-bird"></span>
			</div>
		)
	}

}

function mapStateToProps(state) {
	return {};
}

function matchDispatchToProps(dispatch) {
	return {
        fetchUsers: (url, userId) => dispatch(fetchUsers(url, userId))
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(GlobalMenuComponent)