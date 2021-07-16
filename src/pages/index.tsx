import Header from "../components/Header/header";
import Posts from "../components/Posts";
import { HomeContainer } from '../styles/index.styled';


export default function Home() {

  return (
    <HomeContainer>
      <Header />
      <Posts />
    </HomeContainer>
  )
}
