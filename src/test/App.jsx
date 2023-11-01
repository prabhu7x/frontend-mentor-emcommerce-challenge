import React from 'react'
import Test from './Test'
import { Route ,Routes } from 'react-router-dom'
import Child from './Child'

function App() {
  return (
    <div>
        <Routes>
            <Route index element={<Test />}/>
            <Route path='child/:id' element={<Child/>} />
        </Routes>
    </div>
  )
}

export default App