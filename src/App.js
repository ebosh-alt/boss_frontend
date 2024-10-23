import './styles/App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Catalog from "./pages/Catalog";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";
import Advertisement from "./pages/Advertisement";
import Home from "./pages/Home";
import UserContext from "./utils/contexts";
import React, {useEffect, useState} from 'react';

function App() {
    const [userId, setUserId] = useState(null);
    useEffect(() => {
        if (window.Telegram && window.Telegram.WebApp) {
            const telegram = window.Telegram.WebApp;
            telegram.setBackgroundColor("#ffffff");
            let telegramUserId = window.Telegram.WebApp?.initDataUnsafe?.user?.id || 5191469996;
            window.Telegram.WebApp.expand();
            setUserId(telegramUserId)
        }

    }, []);
    return (<Router>
        <UserContext.Provider value={{userId, setUserId}}>
            <div className={"app"}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Catalog" element={<Catalog/>}/>
                    <Route path="/Advertisement" element={<Advertisement/>}/>
                    <Route path="/Profile" element={<Profile/>}/>
                    <Route path="/Registration" element={<Registration/>}/>
                </Routes>
            </div>
        </UserContext.Provider>
    </Router>)
}

export default App;
