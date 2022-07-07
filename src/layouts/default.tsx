import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const DefaultLayout = ({ children }: Props) => {
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
