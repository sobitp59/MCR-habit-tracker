

import { Route, Routes } from 'react-router-dom'
import Archive from './Archive'
import Habit from './Habit'
import Header from './Header'
import Home from './Home'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/habits' element={ <Habit />} />
        <Route path='/archive' element={ <Archive />} />
      </Routes>
    </>
  )
}

export default App
