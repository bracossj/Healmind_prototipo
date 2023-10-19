import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login_page';
import RegisterPage from './pages/register_page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home</h1>}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/profile' element={<h1>Profile</h1>}></Route>
        <Route path='/assistent' element={<h1>Virtual Assistent</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App