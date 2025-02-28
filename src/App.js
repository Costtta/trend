import './App.css'
import { Route, Routes } from 'react-router'
import Home from "./pages/Home";
import Register from "./pages/Register";
import Search from "./pages/Search";
import CategoryLivingRoom from './pages/CategoryLivingRoom';
import { darkTheme, lightTheme } from './mui/theme';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from 'react-redux';
import Cart from "./pages/Cart";
import CompletePayment from './pages/CompletePayment';


function App() {
  const darkMode = useSelector(state => state.themeMode.darkMode)  
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/trend" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path='/shop' element={<CategoryLivingRoom />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/data' element={<CompletePayment />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
