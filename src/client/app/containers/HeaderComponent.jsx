import React from 'react'
import { render } from 'react-dom'

import GlobalMenuComponent from './GlobalMenuComponent.jsx'
import UserInfoComponent from './UserInfoComponent.jsx'

class HeaderComponent extends React.Component {

	render() {
		return (

			<div className='header-component'>
				<GlobalMenuComponent />
				<UserInfoComponent />
			</div>
		)
	}

}

export default HeaderComponent