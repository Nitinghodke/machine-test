 
import './App.css';
import Login from './componants/Login';
import List from './componants/List'
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Routes>
      <Route  path="/" element={<Login/>}/>
      <Route  path="List" element={<List/>}/>
    </Routes>
  
    </div>
  );
}

export default App;
