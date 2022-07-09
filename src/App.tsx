import React from 'react'
import { GlobalStyle } from './globalstyle'
import HeaderProvider from './providers/HeaderProvider'
import Routes from './routes'

export default function App() {
  return (
    <>
      <HeaderProvider>
        <Routes />
        <GlobalStyle />
      </HeaderProvider>

    </>
  )

}
