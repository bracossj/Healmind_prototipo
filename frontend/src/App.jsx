import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthPage from './pages/page_auth'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>HealMind Home</h1>}></Route>
        <Route path='/auth' element={<AuthPage />}></Route>
        <Route path='/perfil' element={<h1>Perfil</h1>}></Route>
        <Route path='/asistentevirtual' element={<h1>Asistente Virtual</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App