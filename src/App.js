import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <NavBar />
      <main>
        <Outlet />
        <ItemListContainer />
      </main>
      <footer>
        Este es el footer...
      </footer>
    </div>
  );
}

export default App;
