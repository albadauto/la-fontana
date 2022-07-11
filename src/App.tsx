import React from 'react'
import { ToastContainer } from 'react-toastify'
import { GlobalStyle } from './globalstyle'
import AdminProvider from './providers/AdminProvider'
import CartProvider from './providers/CartProvider'
import HeaderProvider from './providers/HeaderProvider'
import Routes from './routes'

export default function App() {
  return (
    <>
      <AdminProvider>
        <CartProvider>

          <HeaderProvider>
            <Routes />
            <GlobalStyle />
            <ToastContainer />
          </HeaderProvider>
        </CartProvider>

      </AdminProvider>



    </>
  )

}
