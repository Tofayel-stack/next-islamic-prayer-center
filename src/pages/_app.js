
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page)


  return getLayout(
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
      </SessionProvider>
  )
}
