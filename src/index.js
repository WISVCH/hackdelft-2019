import React from 'react'
import { hydrate, render } from 'react-dom'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store'

import Translations from 'containers/Translations'
import Theme from 'containers/Theme'
import App from 'containers/App'

const history = createHistory({ basename: "/2018" })
const initialState = {
	router: { location: history.location }
}
const store = configureStore(initialState, history)

const Root = (
	<Provider store={store}>
		<Translations>
		  <Theme>
				<ConnectedRouter history={history}>
		      <App/>
				</ConnectedRouter>
			</Theme>
		</Translations>
	</Provider>
)
const root = document.getElementById('root')

if (root.hasChildNodes()) {
	hydrate(Root, root)
} else {
	render(Root, root)
}

registerServiceWorker()
