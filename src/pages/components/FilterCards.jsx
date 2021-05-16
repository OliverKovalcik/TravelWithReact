import * as React from 'react'
import { Checkbox, Box } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export const FilterCards = ({ country }) => {
  return (
    <Box>
      <Checkbox paddingLeft="30px">{country}</Checkbox>
    </Box>
  )
}

FilterCards.propTypes = {
  country: PropTypes.string,
}
