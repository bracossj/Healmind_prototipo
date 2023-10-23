import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import AuthPage from './pages/auth';
import PrincipalPage from './pages/principal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/auth' element={<AuthPage />}></Route>
        <Route path='/principal' element={<PrincipalPage />}></Route>
        <Route path='/assistent' element={<h1>Virtual Assistent</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App