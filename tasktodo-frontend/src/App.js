import './App.css';
import { Routes, Route } from 'react-router';
import ViewFormTask from './components/views/ViewFormTask';
import ViewToDoList from './components/views/ViewToDoList';
import ViewFolders from './components/views/ViewFolders';

const App = () => {
  return (
    <>
      <Routes>
        <Route unique path="/" element={<ViewFolders/>} />
        <Route path="/list" element={<ViewToDoList/>} />
        <Route path="/formTask" element={<ViewFormTask/>} />
      </Routes>
    </>
  );
}

export default App;
