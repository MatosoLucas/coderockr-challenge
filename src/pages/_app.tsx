import type { AppProps } from 'next/app'
import { Normalize } from 'styled-normalize'
import { PostsProvider } from '../context/PostsContext'
import '../styles/noScroll.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PostsProvider>
      <Normalize />
      <Component {...pageProps} />
    </PostsProvider>
  )
}
export default MyApp
