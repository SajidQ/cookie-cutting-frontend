import _ from 'lodash'
import React, { PureComponent } from 'react'
import Box from '../../core/Box'

class Ingredients extends PureComponent<{
  recipe: *,
  selectedVersion: number,
}> {
  render() {
    const { recipe, selectedVersion } = this.props

    const { ingredients } = _.first(
      _.filter(recipe.versions, version => {
        return version.id === selectedVersion
      }),
    )

    return (
      <Box direction="col" width="300px">
        <h3>Ingredients</h3>
        {_.map(ingredients, ingredient => {
          return <Box>{ingredient.name}</Box>
        })}
      </Box>
    )
  }
}

export default Ingredients
