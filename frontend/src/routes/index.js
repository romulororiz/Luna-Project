import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Search from '../pages/Search';
import RestaurantProfile from '../pages/RestaurantProfile';
import UserProfile from '../pages/UserProfile';
import Login from '../components/Auth/Login';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/search' component={Search} />
				<Route exact path='/user-profile' component={UserProfile} />
				<Route
					exact
					path='/restaurant-profile/:restaurantId'
					component={RestaurantProfile}
				/>
				<Route exact path='/login' component={Login} />
			</Switch>
		</Router>
	);
};

export default Routes;
