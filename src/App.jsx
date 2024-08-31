import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductItem from './Pages/ProductItem';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
             <Route path='/ProductItme' element={<ProductItem/>}/>
        </Routes>     
      </BrowserRouter>
      <Home/>
    </div>
  );
}

export default App;
