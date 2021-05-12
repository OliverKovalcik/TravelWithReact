import React from "react"
import { ChakraProvider } from "@chakra-ui/react"

import {Home} from "./pages/Home.jsx"

export const App = () => (<ChakraProvider>
 <Home/>
</ChakraProvider>) 

