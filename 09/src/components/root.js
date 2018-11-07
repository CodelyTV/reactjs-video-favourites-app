import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import List from './List';
import Detail from './Detail';

const Root = () => (
	<BrowserRouter>
		<div>
			<Route exact path="/" component={List}/>
			<Route exact path="/:id" component={Detail}/>
		</div>
	</BrowserRouter>
);

export default Root;