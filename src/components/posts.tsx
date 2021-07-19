import Link from 'next/link';
import { usePosts } from '../context/PostsContext';
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from 'react';
import { GridTest, PostContainer, PostContainerLarge } from './Posts.styled';


export default function Posts() {

  const { posts, setPosts } = usePosts();
  const [hasMore, setHasMore] = useState(true)

  const flatPosts = posts.flat()

  const getMorePosts = async () => {
    const response = await fetch(`https://stormy-shelf-93141.herokuapp.com/articles?_start=${flatPosts.length}&_limit=6`)
    const newPosts = await response.json()
    setPosts((post) => [...post, [...newPosts]])
  }

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={getMorePosts}
      hasMore={hasMore}
      loader={'...'}
    >
      {posts.map((posts, index) => (
        <GridTest key={index}>
          {posts.map((post, index) => (
            index === 3 || index === 4 ?
              <PostContainer key={post.id} index={index}>
                <div>
                  <span>{post.author}</span>
                  <Link href={`post/${post.id}`} passHref>
                    <span>{post.title}</span>
                  </Link>
                  <Link href={`post/${post.id}`} passHref>
                    <div dangerouslySetInnerHTML={{ __html: `${post.article.slice(0, 90)}` }} />
                  </Link>
                </div>
                <img src={post.imageUrl} alt="post image" />
              </PostContainer>
              :
              index === 2 || index === 5 ?
                <PostContainerLarge key={post.id} index={index}>
                  <img src={post.imageUrl} alt="post image" />
                  <div>
                    <span>{post.author}</span>
                    <Link href={`post/${post.id}`} passHref>
                      <span>{post.title}</span>
                    </Link>
                    <Link href={`post/${post.id}`} passHref>
                      <div dangerouslySetInnerHTML={{ __html: `${post.article.slice(0, 90)}` }} />
                    </Link>
                  </div>
                </PostContainerLarge>
                :
                <PostContainer key={post.id} index={index}>
                  <img src={post.imageUrl} alt="post image" />
                  <div>
                    <span>{post.author}</span>
                    <Link href={`post/${post.id}`} passHref>
                      <span>{post.title}</span>
                    </Link>
                    <Link href={`post/${post.id}`} passHref>
                      <div dangerouslySetInnerHTML={{ __html: `${post.article.slice(0, 90)}` }} />
                    </Link>
                  </div>
                </PostContainer>
          ))}
        </GridTest>))
      }

    </InfiniteScroll>
  )
}