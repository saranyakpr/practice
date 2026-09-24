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
import Home from './Component/Home';
import Profile from './Component/Profile';
import { UserProvider } from './Context/UserContext';
import About from './Component/About';

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
      {/* <Parent/> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Parent/>}/>
          <Route path='/child' element={<Child/>}/>
        </Routes>
      </BrowserRouter> */}
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  )
}

export default App