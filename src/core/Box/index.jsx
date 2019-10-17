import _ from 'lodash'
import React, { PureComponent } from 'react'
import UiBox from 'ui-box'

const omitGroup = ['children']

class Box extends PureComponent<{
  children: *,
  direction?: string,
  ...props,
}> {
  render() {
    const { direction, children } = this.props
    const extraProps = {}

    if (direction) {
      extraProps.flexDirection =
        direction === 'col' ? 'column' : 'row'
    }

    return (
      <UiBox
        display="flex"
        {...extraProps}
        {..._.omit(this.props, omitGroup)}
      >
        {children}
      </UiBox>
    )
  }
}

export default Box
