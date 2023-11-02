import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import AuthPage from './pages/auth';
import PrincipalPage from './pages/principal';
import AsistentePage from './pages/asistente';
import { AuthProvider } from './context/authContext'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/auth' element={<AuthPage />}></Route>
          <Route path='/principal' element={<PrincipalPage />}></Route>
          <Route path='/asistente' element={<AsistentePage />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App