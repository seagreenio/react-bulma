import { Box, Table, TableContainer } from '../..'

import React from 'react'
import centered from '@storybook/addon-centered/react'

const TableContent = () => (
  <>
    <thead>
      <tr>
        <th>One</th>
        <th>Two</th>
        <th>Three</th>
        <th>Four</th>
        <th>Five</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Six</td>
        <td>Seven</td>
        <td>Eight</td>
        <td>Nine</td>
        <td>Ten</td>
      </tr>
      <tr>
        <td>Eleven</td>
        <td>Twelve</td>
        <td>Thirteen</td>
        <td>Fourteen</td>
        <td>Fifteen</td>
      </tr>
    </tbody>
  </>
)

export default {
  title: 'Elements/Table',
  component: Table,
  decorators: [centered],
}

export const Default = () => (
  <Table>
    <TableContent />
  </Table>
)

export const Bordered = () => (
  <Table bordered>
    <TableContent />
  </Table>
)

export const Striped = () => (
  <Table striped>
    <TableContent />
  </Table>
)

export const Narrow = () => (
  <Table narrow>
    <TableContent />
  </Table>
)

export const hoverable = () => (
  <Table hoverable>
    <TableContent />
  </Table>
)

export const Fullwidth = () => (
  <Table fullwidth>
    <TableContent />
  </Table>
)

export const Combine = () => (
  <Table bordered striped narrow hoverable fullwidth>
    <TableContent />
  </Table>
)

export const Scrollable = () => (
  <Box style={{ width: 380 }}>
    <TableContainer>
      <Table>
        <TableContent />
      </Table>
    </TableContainer>
  </Box>
)
