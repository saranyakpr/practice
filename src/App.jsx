import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import Routing from './Routing'
import Form from './Form';
import Post from './Component/BlogPost/Post';
import ArticleSorting from './Component/ArticleSorting/ArticleSorting';
import Crud from './Component/Crud/Crud';
import Pagination from './Component/Pagination/Pagination';
import Parent from './Component/Props/Parent';

const App = () => {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
        staleTime: Infinity,
      },
    },
  });

  return (
    <div>
      {/* <QueryClientProvider client={queryClient}>
        <Routing/>
      </QueryClientProvider> */}
      {/* <Form/> */}
      {/* <Post/> */}
      {/* <ArticleSorting/> */}
      {/* <Crud/> */}
      {/* <Pagination/> */}
      <Parent/>
    </div>
  )
}

export default App