import CommonProps from '../types/CommonProps'
import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import getUnhandledProps from 'lib/getUnhandledProps'

export interface TabProps extends CommonProps {
  active?: boolean
}

const Tab: React.FC<TabProps> = ({ children, className, ...props }) => {
  const rest = getUnhandledProps(Tab, props)
  const classes = cx(className, {
    'is-active': props.active,
  })

  return (
    <li {...rest} className={classes}>
      <a>{children}</a>
    </li>
  )
}

Tab.propTypes = {
  active: PropTypes.bool,
}

export default Tab
