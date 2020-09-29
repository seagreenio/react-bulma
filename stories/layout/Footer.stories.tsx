import { Footer } from '../..'
import React from 'react'

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export default {
  title: 'Layout/Footer',
  component: Footer,
}

export const Default = () => <Footer style={style}>This is a Footer</Footer>
