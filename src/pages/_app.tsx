import React from 'react'
import { AppProps } from 'next/app'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
