import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/Layout";
import Weather from "./components/Weather";

const app = document.getElementById('app');
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Weather}></IndexRoute>
		</Route>
	</Router>
, app);