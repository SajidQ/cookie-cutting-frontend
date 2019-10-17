import React, {Component } from 'react'
import {Route, Switch} from 'react-router-dom'

import AllRecipes from './components/AllRecipes'
import RecipeDetailPage from './components/RecipeDetailPage'
import AddReciepePage from './components/AddReciepePage'

class AppContainer extends Component {

	render (){
		return (<Switch>
			
				<Route path="/recipe/:id" component={RecipeDetailPage} />
			<Route path="/add-recipe" component={AddReciepePage} />
			<Route path="/" component={AllRecipes} />
		</Switch>)
	}
}

export default AppContainer
