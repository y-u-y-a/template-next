import { FC } from 'react'
import Layout from '../components/layouts/default'

const ContactPage: FC = () => {
  return (
    <Layout>
      <div className="">
        <h1 className="my-4 text-center text-xl">お問い合わせ</h1>
        <form className="mx-auto w-1/2 bg-white rounded-md" action="">
          <ul className="px-4 py-8 flex flex-col gap-8">
            <li className="flex items-center gap-8">
              <label className="mr-8 w-12" htmlFor="">
                会社名
              </label>
              <input className="px-2 border border-gray-300 rounded-sm" type="text" placeholder="テスト株式会社" />
            </li>
            <li className="flex items-center gap-8">
              <label className="mr-8 w-12" htmlFor="">
                名前
              </label>
              <input className="px-2 border border-gray-300 rounded-sm" type="text" placeholder="テスト太郎" />
            </li>
          </ul>
        </form>
      </div>
    </Layout>
  )
}

export default ContactPage
