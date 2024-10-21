import logo from './assets/logo.svg';
import './styles/App.css';
import Catalog from "./pages/Catalog";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";
import Advertisement from "./pages/Advertisement";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Catalog/>
          <Advertisement/>
          <Profile/>
          <Registration/>
      </div>
    </div>
  );
}

export default App;
