import '../styles/globals.css'
import '../public/fontawesome/css/all.css'
import { Provider } from 'next-auth/client'

export default function MyApp ({ Component, pageProps }) {
  return (
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
  )
}
