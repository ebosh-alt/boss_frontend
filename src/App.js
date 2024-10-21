import logo from './assets/logo.svg';
import './styles/App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Catalog from "./pages/Catalog";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";
import Advertisement from "./pages/Advertisement";

function App() {
    return (
        <Router>
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <Routes>
                        <Route path="/Catalog" element={<Catalog/>}/>
                        <Route path="/Advertisement" element={<Advertisement/>}/>
                        <Route path="/Profile" element={<Profile/>}/>
                        <Route path="/Registration" element={<Registration/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
