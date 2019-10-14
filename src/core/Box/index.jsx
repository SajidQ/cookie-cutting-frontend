import React, {Component} from 'react'
import UiBox from 'ui-box'

class Box extends Component<{children: *, direction?: string}>{


	render(){
		let extraProps = {}

		if(this.props.direction){
			extraProps.flexDirection = this.props.direction === 'col' ? 'column':'row'
		}
		return <UiBox display="flex" {...extraProps}>
			{this.props.children}
		</UiBox>
	}
}

export default Box
