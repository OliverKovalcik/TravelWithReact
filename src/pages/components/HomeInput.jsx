import * as React from 'react'
import { Input, Center, Box } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import panel from '../../assets/panel.jpg'

export const HomeInput = ({ setInputText }) => {
  return (
    <Box background={`url('${panel}') center / cover no-repeat`} h="250px">
      <Center>
        <Input
          onChange={(e) => setInputText(e.target.value)}
          color="white"
          marginTop="100px"
          width="20rem"
          size="lg"
          variant="outline"
          placeholder="Choose Your Destination"
        />
      </Center>
    </Box>
  )
}

HomeInput.propTypes = {
  setInputText: PropTypes.func,
}
