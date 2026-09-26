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
import { CartProvider } from './Component/Context/UserContext';
import Navbar from './Component/ReduxProject/Navbar';
import Home from './Component/ReduxProject/Home';
import { Provider } from 'react-redux';
import { store } from './Component/ReduxProject/store';
import Cart from './Component/ReduxProject/Cart';

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
      {/* <CartProvider>
        <div className='p-5'>
          <Navbar/>
          <Home/>
        </div>
      </CartProvider> */}
      <Provider store={store}>
        <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
        
      </Provider>
      
    </div>
  )
}

export default App