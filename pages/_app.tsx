import '../styles/globals.css'
import type { AppProps } from 'next/app'

const TEMP_VALUE = 'TEMP_VALUE' as const

const pageProps = {
  tempKey: TEMP_VALUE,
}

type Props = AppProps & typeof pageProps

const App = ({ Component, pageProps }: Props) => (
  <Component {...pageProps} />
)
export default App
