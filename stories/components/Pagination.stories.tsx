import React from 'react'

import { Pagination, PaginationDirection, PaginationEllipsis, PaginationLink, PaginationList } from '../..'

export default {
  title: 'Components/Pagination',
  component: Pagination,
}

export const Default = () => {
  const Inside = () => (
    <>
      <PaginationDirection direction="previous">Previous</PaginationDirection>
      <PaginationDirection direction="next">Next page</PaginationDirection>
      <PaginationList>
        <PaginationLink aria-label="Goto page 1">1</PaginationLink>
        <PaginationEllipsis />
        <PaginationLink aria-label="Goto page 45">45</PaginationLink>
        <PaginationLink current aria-label="Goto page 46" aria-current="page">
          46
        </PaginationLink>
        <PaginationLink aria-label="Goto page 47">47</PaginationLink>
        <PaginationEllipsis />
        <PaginationLink aria-label="Goto page 86">86</PaginationLink>
      </PaginationList>
    </>
  )

  return (
    <>
      <Pagination aria-label="pagination">
        <Inside />
      </Pagination>
      <Pagination alignment="centered" aria-label="pagination">
        <Inside />
      </Pagination>
      <Pagination alignment="right" aria-label="pagination">
        <Inside />
      </Pagination>
      <Pagination rounded aria-label="pagination">
        <Inside />
      </Pagination>
      <Pagination size="small" aria-label="pagination">
        <Inside />
      </Pagination>
      <Pagination size="medium" aria-label="pagination">
        <Inside />
      </Pagination>
      <Pagination size="large" aria-label="pagination">
        <Inside />
      </Pagination>
    </>
  )
}
