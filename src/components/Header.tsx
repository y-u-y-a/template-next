import { FC } from 'react'
import Link from 'next/link'

export const Header: FC = () => {
  const navItemList = [
    { name: 'お問い合わせ', path: '/contact' },
    { name: 'マイページ', path: '/mypage' },
    { name: '設定', path: '/settings' },
  ]
  return (
    <>
      <header className="bg-blue-400 py-4 px-8">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="text-white text-3xl" target="_blank">
              Template Next.js App
            </a>
          </Link>
          <nav>
            <ul className="flex items-center gap-4">
              {navItemList.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}>
                    <a className="text-white">{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
