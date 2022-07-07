import { NextPage } from 'next'
import { DefaultLayout } from '../layouts/default'

const NotFound: NextPage = () => {
  return (
    <DefaultLayout>
      <h1 className="text-accent">404 Not Found ...</h1>
    </DefaultLayout>
  )
}

export default NotFound
