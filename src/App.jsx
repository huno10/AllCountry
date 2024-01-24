import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header/Header'
import Main from './components/Main/Main';
import { HomePage } from './pages/HomePage';
import { NotFound } from './pages/NotFound';
import { Details } from './pages/Details';
import { useState } from 'react';



function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route path='/' element={<HomePage countries={countries} setCountries={setCountries} />} />
            <Route path='/:name' element={<Details />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </>
  );
}

export default App;
