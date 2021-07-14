import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

interface PostsProviderProps {
  children: ReactNode;
}

interface PostProps {
  id: string;
  author: string;
  authorEmail: string;
  title: string;
  article: string;
  date: string;
  imageUrl: string;
}

interface PostsContextData {
  posts: Array<PostProps>
  setPosts: Dispatch<SetStateAction<PostProps[]>>;
}


const PostsContext = createContext({} as PostsContextData)

export function PostsProvider({ children }: PostsProviderProps) {

  const [posts, setPosts] = useState<Array<PostProps>>([])

  const fetchPosts = async () => {
    const response = await fetch('https://stormy-shelf-93141.herokuapp.com/articles?_limit=6')
    const data = await response.json()
    setPosts(data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <PostsContext.Provider
      value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  )
}

export function usePosts(): PostsContextData {
  const context = useContext(PostsContext)

  return context
}