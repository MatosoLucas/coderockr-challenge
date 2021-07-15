import type { AppProps } from 'next/app'
import { Normalize } from 'styled-normalize'
import { BaseModalBackground, ModalProvider } from 'styled-react-modal'
import { PostsProvider } from '../context/PostsContext'
import styled from 'styled-components'
import '../styles/noScroll.css'

const SpecialModalBackground = styled(BaseModalBackground)`
  overflow-y: auto;
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PostsProvider>
      <Normalize />
      <ModalProvider backgroundComponent={SpecialModalBackground}>
        <Component {...pageProps} />
      </ModalProvider>
    </PostsProvider>
  )
}
export default MyApp
