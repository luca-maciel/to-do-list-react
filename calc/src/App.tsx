import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import NewTask from './components/pages/NewTask';
import './App.css';

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        
        <Route path="" element={<Home />}/>

        <Route path="tasks/new" element={<NewTask />}/>

      </Routes>
    </BrowserRouter>
  );
};
