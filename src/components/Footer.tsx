import Link from 'next/link'

export const Footer = () => {
  return (
    <footer>
      <p>
        <Link href="/privacy/">
          <a>当社プライバシーポリシー</a>
        </Link>
      </p>
      <p>
        <Link href="/information-security-policy/">
          <a>情報セキュリティ基本方針</a>
        </Link>
      </p>
      <p>
        <Link href="/personaldata-privacypolicy/">
          <a>個人情報保護基本方針</a>
        </Link>
      </p>
      <p>
        <small>
          Copyright&nbsp;©2021&nbsp;
          <br />
          SOMPO&nbsp;Light&nbsp;Vortex&nbsp;Inc.,&nbsp;
          <br />
          All&nbsp;Rights&nbsp;Reserved.
        </small>
      </p>
    </footer>
  )
}
