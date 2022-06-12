import { Header } from '../Header'
import { Footer } from '../Footer'

interface Props {
  children: JSX.Element
}

const layoutDefault = ({ children }: Props) => {
  return (
    <>
      <div className="footerFixedContainer">
        <Header />
        <main>{children}</main>
        <div className="footerFixed">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default layoutDefault
