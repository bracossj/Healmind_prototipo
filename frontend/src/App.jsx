import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home_page';
import AuthPage from './pages/auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/auth' element={<AuthPage />}></Route>
        <Route path='/profile' element={<h1>Profile</h1>}></Route>
        <Route path='/assistent' element={<h1>Virtual Assistent</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App