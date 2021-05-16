import * as React from 'react'
import { Checkbox, Heading } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export const FilterNew = ({ newCards, setNewCards }) => {
  return (
    <>
      <Heading paddingLeft="20px" m="10px" size="sm">
        Filters
      </Heading>
      <Checkbox paddingLeft="30px" onChange={() => setNewCards(!newCards)}>
        New
      </Checkbox>
      <Heading paddingLeft="20px" m="10px" size="sm">
        FILTER BY COUNTRY
      </Heading>
    </>
  )
}

FilterNew.propTypes = {
  newCards: PropTypes.bool,
  setNewCards: PropTypes.func,
}
