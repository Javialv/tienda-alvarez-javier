import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-light">
        <NavBar />
      </nav>
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
