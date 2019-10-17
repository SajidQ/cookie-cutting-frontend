import _ from 'lodash'
import React, { PureComponent } from 'react'

import Ingredients from '../Ingredients'

import Box from '../../core/Box'

const recipe = {
  name: 'Paratha Roll',
  image:
    'https://thecookbook.pk/wp-content/uploads/2018/10/rolls.jpg',
  versions: [
    {
      id: 1,
      name: 'V1 - best',
      fav: true,
      ingredients: [
        {
          qty: 2,
          type: 'oz',
          name: 'Cinnamon',
        },
        {
          qty: 2,
          type: 'tbs',
          name: 'Ginger',
        },
      ],
      steps: [],
      media: [
        {
          url: 'https://www.youtube.com/watch?v=gDUaZVS1u40',
          type: 'video',
        },
      ],
      notes: 'asdfas asdfasdfa asdfad',
    },
    {
      id: 2,
      name: 'attempt 2',
      fav: true,
      ingredients: [{}],
      steps: [],
      media: [
        {
          url: 'https://www.youtube.com/watch?v=gDUaZVS1u40',
          type: 'video',
        },
      ],
      notes: 'asdfas asdfasdfa asdfad',
    },
  ],
}

class RecipeDetailPage extends PureComponent<{}> {
  render() {
    return (
      <>
        <h1>{recipe.name}</h1>
        <h2>Version</h2>
        <Box direction="row">
          <Box direction="col">
            <Ingredients recipe={recipe} selectedVersion={1} />
          </Box>

          <Box width="300px">Media</Box>
          <Box direction="col" width="300px">
            Versions
            {_.map(recipe.versions, version => {
              return <span>{version.name}</span>
            })}
          </Box>
        </Box>
      </>
    )
  }
}

export default RecipeDetailPage
