import { BrowserRouter, Route, Routes } from "react-router-dom"
import './style/style.css'
import AlbumList from "./components/album/AlbumList";
import PhotoList from './components/photos/PhotoList'
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<AlbumList />} />
          <Route path='album/:id' element={<PhotoList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
