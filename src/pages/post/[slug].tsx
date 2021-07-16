import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import styled from 'styled-components';
import Header from '../../components/Header/header';
import { usePosts } from '../../context/PostsContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(90deg, #F1A10A 0%, #342303 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  max-width: 1920px;
  min-height: 100vh;
`

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  margin: 60px auto 218px auto;
  background: #FFFFFF;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);

  @media(max-width: 1320px) {
    margin: 60px 20px;
  }

      div {
        display: flex;

      img {
        display: flex;
        width: 50%;
        height: 50%;
        }
} 
`

const PostInfo = styled.div`
  display: flex;
  max-width: 640px;
  flex-direction: column;

  span:first-child {
    font-size: 18px;
    color: #032937;
    white-space: nowrap;
    margin-bottom: 44px;
  }

  span {
    font-size: 24px;
    color: #2D2D2D;
  }

  h1 {
    font-size: 36px;
    color: #F1A10A;
    font-weight: 700;
  }
`
const PostContent = styled.div`
  div {
    display: flex;
    flex-direction: column;
    max-width: 680px;
    font-size: 24px;
    margin: 124px auto;
    line-height: 34.13px;
    
    @media (max-width: 768px) {
      margin: 124px 20px;
    }
  }
`

export default function Post() {

  const router = useRouter()
  const { slug } = router.query

  const { posts } = usePosts();

  const flatPosts = posts.flat()

  const currentPost = flatPosts.find(post => post.id === slug)


  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }

  return (
    <Container>
      <Header home={false} />
      <PostContainer>
        <div>
          <img src={currentPost?.imageUrl} alt="post url" />
          <PostInfo>
            <span>{formatDate(currentPost?.date ?? '')}</span>
            <span>{currentPost?.author}</span>
            <h1>{currentPost?.title}</h1>
          </PostInfo>
        </div>
        <PostContent>
          <div dangerouslySetInnerHTML={{ __html: `${currentPost?.article}` }} />
        </PostContent>
      </PostContainer>
      )
    </Container>
  )
}