import { FC } from 'react'
import Link from 'next/link'

export const Footer: FC = () => {
  const navItemList = [
    { name: '利用規約', path: '/terms-policy' },
    { name: '当社プライバシーポリシー', path: '/company-policy' },
    { name: '情報セキュリティ基本方針', path: '/security-policy' },
    { name: '個人情報保護基本方針', path: '/personal-policy' },
  ]
  return (
    <footer className="bg-gray-300">
      <ul className="pt-12 pb-8 flex justify-center gap-8">
        {navItemList.map((item) => (
          <li key={item.path}>
            <Link href={item.path}>
              <a className="text-gray-600">{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <small className="block text-center text-gray-600 pb-8">
        Copyright&nbsp;©2021&nbsp;
        <br className="md:hidden" />
        SOMPO&nbsp;Light&nbsp;Vortex&nbsp;Inc.,&nbsp;
        <br className="md:hidden" />
        All&nbsp;Rights&nbsp;Reserved.
      </small>
    </footer>
  )
}
