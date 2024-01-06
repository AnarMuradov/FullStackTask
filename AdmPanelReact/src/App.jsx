import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/homepage';
import AdminPanel from './pages/adminpanelpage';
import AddPage from './pages/addpage';
import EditPage from './pages/editpage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/AdminPanel' element={<AdminPanel/>} />
        <Route path="/AddPage" element={<AddPage/>}/> 
        <Route path="/EditPage" element={<EditPage/>}/> 
      </Routes>
    </BrowserRouter>
  );
}
export default App;
