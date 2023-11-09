import './App.css';
import BlogLayout from "./components/layout/BlogLayout";
import BlogAdmin from "./components/Admin/BlogAdmin";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<BlogLayout />}></Route>
        <Route path='admin' element={<BlogAdmin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
