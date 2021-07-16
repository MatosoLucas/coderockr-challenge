import styled from 'styled-components';
import Link from 'next/link';
import { usePosts } from '../context/PostsContext';
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from 'react';

const GridTest = styled.div`
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-rows: 320px 640px 320px 640px;
  grid-template-columns: auto auto;
  grid-template-areas: 
    "item0 item1"
    ". item2"
    "item3 item4"
    "item5 .";
  grid-gap: 0px;
`

const PostContainer = styled.div<{ index: number }>`
  display: flex;
  height: 320px;
  max-width: 960px;
  margin: 0 auto 50px auto;
  grid-area: item${props => props.index};

  img {
    height: 320px;
    width: 320px;
  }

  div {
    padding: 35px 80px;
    background: #FFFFFF;

    p:first-child {
      font-size: 24px;
      color: #2D2D2D;
      margin: 0px;
    }

    p:nth-child(2) {
      color: #F1A10A;
      font-size: 36px;
      margin: 7px 0 13px 0;
      cursor: pointer;

      :hover {
        text-decoration: underline;
      }
    }

    p:last-child {
      font-size: 24px;
      color: #2D2D2D;
    }

    div { 
      padding: 0;
      cursor: pointer;
      :hover {
        text-decoration: underline;
      }
    }
  }
`

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
            index % 3 == 0 && index != 0 || index % 4 == 0 && index != 0 ?
              <PostContainer key={post.id} index={index}>
                <div>
                  <p>{post.author}</p>
                  <Link href={`post/${post.id}`} passHref>
                    <p>{post.title}</p>
                  </Link>
                  <Link href={`post/${post.id}`} passHref>
                    <div dangerouslySetInnerHTML={{ __html: `${post.article.slice(0, 120)}...` }} />
                  </Link>
                </div>
                <img src={post.imageUrl} alt="post image" />
              </PostContainer>
              :
              <PostContainer key={post.id} index={index}>
                <img src={post.imageUrl} alt="post image" />
                <div>
                  <p>{post.author}</p>
                  <Link href={`post/${post.id}`} passHref>
                    <p>{post.title}</p>
                  </Link>
                  <Link href={`post/${post.id}`} passHref>
                    <div dangerouslySetInnerHTML={{ __html: `${post.article.slice(0, 120)}...` }} />
                  </Link>
                </div>
              </PostContainer>
          ))}
        </GridTest>))
      }

    </InfiniteScroll>
  )
}