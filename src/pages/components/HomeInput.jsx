import * as React from 'react'
import { Input, Center } from '@chakra-ui/react'

export const HomeInput = () => {
  return (
    <Center>
      <Input
        m="30px"
        width="20rem"
        size="lg"
        variant="flushed"
        placeholder="Choose Your Destination"
      />
    </Center>
  )
}
