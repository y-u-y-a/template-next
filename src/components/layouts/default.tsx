import { Header } from '../Header'
import { Footer } from '../Footer'

interface Props {
  children: JSX.Element
}

const layoutDefault = ({ children }: Props) => {
  return (
    <>
      <div className="footerFixedContainer bg-gray-100">
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
