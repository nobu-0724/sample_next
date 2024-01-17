import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme ,} from '@chakra-ui/react'
import React, { createContext } from 'react'


export const UserContext = createContext<{name:string | null}>({name:null})


export default function App({ Component, pageProps }: AppProps) {

  const theme = extendTheme({
    colors: {
      gray: {
        300: "#eee"
      },
    },
  })
  

  return (
    <> 
      <UserContext.Provider value={{name:"北野さん"}}>
        <ChakraProvider theme={theme}  >
          <Component {...pageProps} />
        </ChakraProvider> 
      </UserContext.Provider>
    </>
  )
}
