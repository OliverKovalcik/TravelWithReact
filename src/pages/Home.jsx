import React from 'react'
import { Box, Center, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import bg from '../assets/bg.jpg'

export const Home = () => (
  <Box background={`url('${bg}') center / cover no-repeat`} h="100vh">
    <Center h="100vh">
      <Button p="10" fontSize="40" size="lg" as={Link} to="/offers">
        Wellcome! Travel with React.
      </Button>
    </Center>
  </Box>
)
