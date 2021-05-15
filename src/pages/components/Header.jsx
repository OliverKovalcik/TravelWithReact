/* eslint-disable react/no-children-prop */
import { Box, Container, Text } from '@chakra-ui/react'

import * as React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from './NavLink'

// eslint-disable-next-line react/prop-types
export const Header = () => {
  return (
    <Box as="header" m="4" p="4" shadow="base" fontSize="20">
      <Container
        maxWidth="container.xl"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link to="/">
          <Text as="h2" fontWeight="bold">
            React & relax
          </Text>
        </Link>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/offers">Offers</NavLink>
        </nav>
      </Container>
    </Box>
  )
}
