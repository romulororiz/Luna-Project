import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Search from '../pages/Search';
import RestaurantProfile from '../pages/RestaurantProfile';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/search' component={Search} />
				<Route exact path='/restaurant-profile/:restaurantId' component={RestaurantProfile} />
			</Switch>
		</Router>
	);
};

export default Routes;
