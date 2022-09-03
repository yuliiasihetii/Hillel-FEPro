import '../App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AlbumList from './components/AlbumList';
import PhotoList from './components/PhotoList';


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AlbumList />}></Route>
        <Route path='/albumlist/:id' element={<PhotoList />}></Route>
      </Routes>
    </BrowserRouter >
  );
}

export default AppRoutes;
