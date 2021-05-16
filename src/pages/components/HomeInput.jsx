import * as React from 'react'
import { Input, Center, Box } from '@chakra-ui/react'
import panel from '../../assets/panel.jpg'

export const HomeInput = () => {
  return (
    <Box background={`url('${panel}') center / cover no-repeat`} h="250px">
      <Center>
        <Input
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
