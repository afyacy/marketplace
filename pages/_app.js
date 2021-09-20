import '../styles/globals.css'
import { Provider } from 'next-auth/client'

// eslint-disable-next-line react/prop-types
export default function MyApp ({ Component, pageProps }) {
  return (
      // eslint-disable-next-line react/prop-types
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
  )
}
