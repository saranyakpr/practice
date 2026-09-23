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
import { UserContext, UserProvider } from './Context/UserContext';
import About from './Component/About';
import Service from './Component/Service';

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
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/service' element={<Service/>}/>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  )
}

export default App