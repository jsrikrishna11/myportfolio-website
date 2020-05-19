import Head from 'next/head'
import Navigation from '../components/navigation'
import {ThemeProvider} from 'react-ui'
import {tokens, components} from 'react-ui/themes/dark'

import Welcome from './welcome'

export default function Home() {
  return (
    <ThemeProvider tokens={tokens} components={components}>
    <Head>
      <title>My Portfolio Sri Krishna J</title>
    </Head>
    <Welcome>

    </Welcome>
    </ThemeProvider>
  )
}