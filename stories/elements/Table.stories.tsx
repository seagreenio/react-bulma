import React from 'react'

import { Box, Table, TableContainer } from '../..'

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
}

export const Default = () => (
  <Table>
    <TableContent />
  </Table>
)

export const Modifiers = () => (
  <>
    <Table bordered>
      <TableContent />
    </Table>
    <Table striped>
      <TableContent />
    </Table>
    <Table narrow>
      <TableContent />
    </Table>
    <Table hoverable>
      <TableContent />
    </Table>
    <Table fullwidth>
      <TableContent />
    </Table>
    <Table bordered striped narrow hoverable fullwidth>
      <TableContent />
    </Table>
  </>
)

export const Container = () => (
  <div style={{ width: 256 }}>
    <TableContainer>
      <Table>
        <TableContent />
      </Table>
    </TableContainer>
  </div>
)
