import './App.css';
import { Routes, Route } from 'react-router';
import ViewFormTask from './components/views/ViewFormTask';
import ViewToDoList from './components/views/ViewToDoList';

const App = () => {
  return (
    <>
      <Routes>
        <Route unique path="/" element={<ViewToDoList/>} />
        <Route path="/formTask" element={<ViewFormTask/>} />
      </Routes>
    </>
  );
}

export default App;
