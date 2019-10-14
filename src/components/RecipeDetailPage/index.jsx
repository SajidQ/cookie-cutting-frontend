import _ from 'lodash'
import React, {Component, Fragment } from 'react'
import Box from '../../core/Box'

const recipe = {
		name: 'Paratha Roll',
		image: 'https://thecookbook.pk/wp-content/uploads/2018/10/rolls.jpg',
		version : [
			{
				id: 1, 
				name: 'attemp 1',
				fav: true, 
				ingredients: [
					{
						qty: 2, 
						type: 'oz',
						material: 'asdfasd'
					}
				], 
				steps: [

				],
				media: [
					{
						url: 'https://www.youtube.com/watch?v=gDUaZVS1u40',
						type: 'video'
					}
				],
				notes: "asdfas asdfasdfa asdfad"
			},
			{
				id: 2, 
				name: 'attemp 2',
				fav: true, 
				ingredients: [
					{

					}
				], 
				steps: [

				],
				media: [
					{
						url: 'https://www.youtube.com/watch?v=gDUaZVS1u40',
						type: 'video'
					}
				],
				notes: "asdfas asdfasdfa asdfad"
			}
		]
	}

class RecipeDetailPage extends Component<{}>{
	render(){
		return <Fragment>
		<h1>{recipe.name}</h1>
		<h2>Version</h2>
		<Box direction="row" width="300px">
			<Box direction="row">
				<Box direction="col">
					
					<Box>
						<h3>Ingredients</h3>
					</Box>
				</Box>
				<Box>Media</Box>
			</Box>
			<Box>
				{_.map(recipe.version, 'name')}
			</Box>
		</Box>

		</Fragment>
	}
}

export default RecipeDetailPage
