import React from 'react'
import { render } from 'react-dom'
import { Route, Router, IndexRouter, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

import HeaderComponent from './containers/HeaderComponent.jsx'
import BodyComponent from './containers/BodyComponent.jsx'
import appStore from './stores/appStore.jsx'

class App extends React.Component {

	render() {
		// return (
		// 	<Router history={hashHistory}>
		// 		<Route path='/' component={LoginPageComponent} />
		// 		<Route path='/todo' component={TodoComponent} />
		// 		<Route path='*' component={PageNotFoundComponent} />
		// 	</Router>

		// );
		return (
			<div> 
				<HeaderComponent />
				<BodyComponent />
			</div>

		);
	}
}

var appRoot = document.getElementById('app');
render(
	<Provider store={appStore}>
	<App /></Provider>,
appRoot);