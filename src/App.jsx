import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import Routing from './Routing'
import Form from './Form';
import Post from './Component/BlogPost/Post';
import ArticleSorting from './Component/ArticleSorting/ArticleSorting';
import Crud from './Component/Crud/Crud';
import Pagination from './Component/Pagination/Pagination';
import Parent from './Component/Props/Parent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Child from './Component/Props/Child';

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

  const name = 'saran';

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
      {/* <Parent/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Parent/>}/>
          <Route path='/child' element={<Child/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App