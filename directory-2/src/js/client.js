import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute, hashHistory } from "react-router"

import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Marketplace from "./pages/Marketplace"
import Admin from "./pages/Admin"
import store from "./store"

const app = document.getElementById('app');

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Layout}>
				<IndexRoute component={Home}></IndexRoute>
				<Route path="marketplace" name="marketplace" component={Marketplace}></Route>
				<Route path="admin" name="admin" component={Admin}></Route>
			</Route>
		</Router>
	</Provider>
,app);
