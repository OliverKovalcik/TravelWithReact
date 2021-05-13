import React from 'react'
import { Box, Center, Heading, Button } from '@chakra-ui/react'

export const Home = () => (
  <Box backgroundImage="url('src/assets/image.jpg')" h="100vh">
    <Center h="100vh">
      <div>
        <Heading color="black" textAlign="center" mb="4">
          Welcome
        </Heading>
        <Button>For More Info</Button>
      </div>
    </Center>
  </Box>
)
