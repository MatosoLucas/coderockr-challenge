import { useRouter } from 'next/dist/client/router';
import Header from '../../components/Header/Header';
import { usePosts } from '../../context/PostsContext';
import { Container, PostContainer, PostContent, PostInfo } from '../../styles/slug.styled';


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