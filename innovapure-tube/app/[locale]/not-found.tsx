import 'server-only'
import Link from 'next/link'
import { NextPage } from 'next'

const NotFoundPage: NextPage = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href='/'>Return Home</Link>
    </div>
  )
}

export default NotFoundPage
