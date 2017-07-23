import React from 'react'
import { render } from 'react-dom'

import ComposeTweetComponent from './ComposeTweetComponent.jsx'
import SavedTweetsComponent from './SavedTweetsComponent.jsx'

class TweetsComponent extends React.Component {


	render() {
		return (

			<div className='tweets-component'>
				<ComposeTweetComponent />
				<SavedTweetsComponent />
			</div>
		)
	}

}

export default TweetsComponent