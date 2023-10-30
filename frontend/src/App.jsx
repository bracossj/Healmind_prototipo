import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import AuthPage from './pages/auth';
import PrincipalPage from './pages/principal';
import AsistentePage from './pages/asistente';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/auth' element={<AuthPage />}></Route>
        <Route path='/principal' element={<PrincipalPage />}></Route>
        <Route path='/asistente' element={<AsistentePage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App