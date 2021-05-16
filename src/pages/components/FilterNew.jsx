import * as React from 'react'
import { Checkbox, Heading } from '@chakra-ui/react'

export const FilterNew = () => {
  return (
    <>
      <Heading paddingLeft="20px" m="10px" size="sm">
        Filters
      </Heading>
      <Checkbox paddingLeft="30px">New</Checkbox>
      <Heading paddingLeft="20px" m="10px" size="sm">
        FILTER BY COUNTRY
      </Heading>
    </>
  )
}
