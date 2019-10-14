import React, {Component, Fragment} from 'react'
import { Card, Button, Icon, Avatar } from 'antd';
import {withRouter} from 'react-router-dom'

const { Meta } = Card;

class RecipeCard extends Component<{recipe:*}>{
	render(){
		return (<div onClick={()=>{
			console.log(this.props)
			return this.props.history.push('/recipe/3')}}><Card
			style={{width:'300px'}}
			
    cover={
      <img
        alt="example"
        src={this.props.recipe.image}
      />
    }
  >
  <Meta title={this.props.recipe.name} />
  </Card></div>)
	}
}

export default withRouter(RecipeCard)
