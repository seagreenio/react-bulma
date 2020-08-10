import CommonProps from 'types/CommonProps'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface LevelProps extends CommonProps {
  left?: boolean
  right?: boolean
  item?: boolean
  mobile?: boolean
}

const Level: React.FC<LevelProps> = ({ children, className, ...props }) => {
  const { left, right, item } = props
  let levelClassName = 'level'
  if (left) {
    levelClassName = 'level-left'
  } else if (right) {
    levelClassName = 'level-right'
  } else if (item) {
    levelClassName = 'level-item'
  }

  const rest = getUnhandledProps(Level, props)
  const ElementType = detectElementType(Level, props)
  const classes = cx(levelClassName, className, {
    [`is-mobile`]: props.mobile,
  })

  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

Level.defaultProps = {
  as: 'div',
  className: undefined,
  left: undefined,
  right: undefined,
  item: undefined,
  mobile: undefined,
}

export default Level
