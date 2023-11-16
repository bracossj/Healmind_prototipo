import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import AuthPage from './pages/auth';
import PrincipalPage from './pages/principal';
import { AuthProvider } from './context/authContext'
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/auth' element={<AuthPage />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path='/principal' element={<PrincipalPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App