import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Query from './Component/Query'
import Queries from './Component/Queries'
import Mutation from './Component/Mutation'

const Routing = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<h2>welcome</h2>}/>
                <Route path='/query' element={<Query/>}/>
                <Route path='/queries' element={<Queries/>}/>
                <Route path='/mutation' element={<Mutation/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing