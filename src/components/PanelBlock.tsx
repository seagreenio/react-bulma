import CommonProps from '../types/CommonProps'
import Icon from 'elements/Icon'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import detectElementType from 'lib/detectElementType'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface PanelBlockProps extends CommonProps {
  active?: boolean
  icon?: typeof Icon
}

const PanelBlock: React.FC<PanelBlockProps> = ({ children, className, ...props }) => {
  const { active, icon } = props

  const rest = getUnhandledProps(PanelBlock, props)
  const ElementType = detectElementType(PanelBlock, props)
  const classes = cx('panel-block', className, {
    'is-active': active,
  })

  return (
    <ElementType {...rest} className={classes}>
      {icon}
      {children}
    </ElementType>
  )
}

PanelBlock.propTypes = {
  active: PropTypes.bool,
  icon: PropTypes.func,
}

export default PanelBlock
