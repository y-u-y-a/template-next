import { Header } from '../Header'
import { Footer } from '../Footer'

interface Props {
  children: JSX.Element
}

const layoutDefault = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default layoutDefault
