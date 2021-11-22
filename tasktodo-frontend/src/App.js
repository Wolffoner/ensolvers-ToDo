import './App.css';
import { Routes, Route } from 'react-router';
import ViewFormTask from './components/ViewFormTask';
import ViewToDoList from './components/ViewToDoList';

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
