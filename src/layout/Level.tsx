import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

import CommonProps from '../types/CommonProps'

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

Level.propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
  item: PropTypes.bool,
  mobile: PropTypes.bool,
}

export default Level
