import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Header } from './components/Header';
import AllCats from './pages/AllCats';
import Favorites from './pages/Favorites';

const GlobalStyle = createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Roboto', sans-serif; }
`;

const basename = import.meta.env.DEV ? '/' : '/cat-pinterest';

const App = () => (
    <BrowserRouter basename={basename}>
        <GlobalStyle />
        <Header />
        <Routes>
            <Route path="/" element={<AllCats />} />
            <Route path="/favorites" element={<Favorites />} />
        </Routes>
    </BrowserRouter>
);

export default App;