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
import Navbar from './Component/Context/Navbar';
import Home from './Component/Context/Home';
import { CartProvider } from './Component/Context/UserContext';

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
      <CartProvider>
        <div className='p-5'>
          <Navbar/>
          <Home/>
        </div>
      </CartProvider>
      
    </div>
  )
}

export default App