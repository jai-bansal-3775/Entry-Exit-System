import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateEmployeePage from "./pages/CreateEmployeePage";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addemployee" element={<CreateEmployeePage />} />
        </Routes>
    </div>
  );
}

export default App;
