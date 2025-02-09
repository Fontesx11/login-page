
import { Route, Routes } from 'react-router'
import './App.css'
import { LoginForm } from './pages/LoginForm'
import { RegisterForm } from './pages/RegisterForm'

function App() {

  return (
    <Routes>
      <Route path='/' element={<LoginForm/>}/>
      <Route path='/register' element={<RegisterForm/>}/>
    </Routes>
    
  )
}

export default App
