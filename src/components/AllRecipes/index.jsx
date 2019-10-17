import _ from 'lodash'
import React, { PureComponent, Fragment } from 'react'

import RecipeCard from './RecipeCard'

const data = [
  {
    id: 1,
    name: 'Paratha Roll',
    image:
      'https://thecookbook.pk/wp-content/uploads/2018/10/rolls.jpg',
  },
  {
    id: 2,
    name: 'Kheer',
    image:
      'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/aarti/Nariyal_Ki_Kheer_edited1.jpg',
  },
  {
    id: 3,
    name: 'Paneer Tikka Masala',
    image:
      'https://healthynibblesandbits.com/wp-content/uploads/2019/07/Paneer-Tikka-Masala-1.jpg',
  },
  {
    id: 4,
    name: 'Suji ka Halwa',
    image:
      'https://www.thespruceeats.com/thmb/nT7dgT6yI33yAmtCWlT6LnetwvM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/badam-halwa-badam-ka-halwa-1957808-hero-01-5c51026046e0fb00014a2f22.jpg',
  },
  {
    id: 5,
    name: 'Paratha Roll',
    image:
      'https://thecookbook.pk/wp-content/uploads/2018/10/rolls.jpg',
  },
  {
    id: 6,
    name: 'Kheer',
    image:
      'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/aarti/Nariyal_Ki_Kheer_edited1.jpg',
  },
  {
    id: 7,
    name: 'Paneer Tikka Masala',
    image:
      'https://healthynibblesandbits.com/wp-content/uploads/2019/07/Paneer-Tikka-Masala-1.jpg',
  },
  {
    id: 8,
    name: 'Suji ka Halwa',
    image:
      'https://www.thespruceeats.com/thmb/nT7dgT6yI33yAmtCWlT6LnetwvM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/badam-halwa-badam-ka-halwa-1957808-hero-01-5c51026046e0fb00014a2f22.jpg',
  },
]

class AllRecipes extends PureComponent<{}> {
  render() {
    return (
      <>
        <h1>Cookie Cutting</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {_.map(data, item => {
            return <RecipeCard recipe={item} />
          })}
        </div>
      </>
    )
  }
}

export default AllRecipes
