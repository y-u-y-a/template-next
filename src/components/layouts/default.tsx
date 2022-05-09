import Head from 'next/head'
import { Header } from '../Header'
import { Footer } from '../Footer'

const layoutDefault = ({ children, title = 'Next Template APP' }: { children: any; title: string }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default layoutDefault
