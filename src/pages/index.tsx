import styled from 'styled-components'
import Header from '../components/Header/header'
import Posts from "../components/posts";

const HomeContainer = styled.div`
  background-image: linear-gradient(90deg, #F1A10A 0%, #342303 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  min-height: 100vh;
`
export default function Home() {

  return (
    <HomeContainer>
      <Header />
      <Posts />
    </HomeContainer>
  )
}
