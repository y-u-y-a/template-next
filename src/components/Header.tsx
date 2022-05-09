import Link from 'next/link'
import Image from 'next/image'
// import AnchorLink from 'react-anchor-link-smooth-scroll'

import Logo from '../images/logo.svg'
import GroupLogo from '../images/groupLogo.gif'
// import HeaderBgLine from '../images/headerBgLine.png'

interface Props {
  showProducts: boolean
  setShowProducts: React.Dispatch<React.SetStateAction<boolean>>
  isAnkerLink: boolean
}

export const Header = ({ showProducts, setShowProducts, isAnkerLink }: Props) => {
  return (
    <>
      <header>
        <Logo className={{}} />
        <Link href="/">
          <a target="_blank">
            <Image src={GroupLogo} alt="" />
          </a>
        </Link>
      </header>
      {/* <div className={styles.root}>
        <header className={styles.header}>
          <div className={styles['header-inner']}>
            <Link href="/">
              <a>
                <Logo className={styles['logo']} />
              </a>
            </Link>
            <Link href="https://www.sompo-hd.com/">
              <a target="_blank" className={styles['group-logo']}>
                <img src={groupLogo} alt="安心・安全・健康のテーマパーク" />
              </a>
            </Link>
          </div>
        </header>
        <nav className={styles.nav}>
          <ul>
            <li className={showProducts ? styles['li-products--active'] : styles['li-products']} onClick={handleToggleShowProducts}>
              <span>Products</span>
            </li>
            {isAnkerLink &&
              links.map((link, index) => {
                return (
                  <li key={index}>
                    <AnchorLink href={link.href}>{link.text}</AnchorLink>
                  </li>
                )
              })}
            {!isAnkerLink &&
              links.map((link, index) => {
                return (
                  <li key={index}>
                    <Link href={`${process.env.REACT_APP_URL}${link.href}`}>{link.text}</Link>
                  </li>
                )
              })}
          </ul>
        </nav>
      </div> */}
    </>
  )
}
