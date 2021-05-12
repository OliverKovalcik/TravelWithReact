import React from "react"
import { Heading, Box, Center } from "@chakra-ui/react"


export const Home = () => (
 <Box backgroundImage="url('src/assets/image.jpg') "
  h="100vh"
  backgroundPosition="cover"
  backgroundRepeat="no-repeat"
 >
  <Center>
   <Heading>HomePage</Heading>
  </Center>
 </Box>
)