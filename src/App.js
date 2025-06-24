import './styles/App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Catalog from "./pages/Catalog";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";
import Advertisement from "./pages/Advertisement";
import Home from "./pages/Home";
import UserContext from "./utils/contexts";
import React, {useEffect, useState} from 'react';
import Verification0 from "./pages/Verification0"
import Verification1 from "./pages/Verification1"
import Verification2 from './pages/Verification2';
import Verification3 from './pages/Verification3';

import { UserProvider } from './utils/contexts/UserContext';

function App() {
    const [userId, setUserId] = useState(null);
    
    // useEffect(() => {
    //     if (window.Telegram && window.Telegram.WebApp) {
    //         const telegram = window.Telegram.WebApp;
    //         telegram.setBackgroundColor("#ffffff");
    //         let telegramUserId = window.Telegram.WebApp?.initDataUnsafe?.user?.id !== null || 1;
    //         window.Telegram.WebApp.expand();
    //         setUserId(telegramUserId)
    //     }

    // }, []);

    // useEffect(() => {
    //     // Парсим query-параметры из URL
    //     const queryParams = new URLSearchParams(location.search);
    //     const adID = queryParams.get('adID'); // Получаем значение adID

    //     console.log('adID:', adID); // Выведет "1" для ?adID=1
    // }, [location.search]);
    // // TODO: Функция получения профиля

    const url = new URL(window.location.href);
    console.log(url)
    console.log(userId)
    const adID = url.searchParams.get('adID')

    return (
            <UserProvider>

    <Router>
            <div className={"app"}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Catalog" element={<Catalog/>}/>
                    <Route path="/Advertisement" element={<Advertisement adID={adID}/>}/>
                    <Route path="/Profile" element={<Profile/>}/>
                    <Route path="/Registration" element={<Registration/>}/>
                    <Route path="/Verification0" element={<Verification0/>}/>
                    <Route path="/Verification1" element={<Verification1/>}/>
                    <Route path="/Verification2" element={<Verification2/>}/>/
                    <Route path="/Verification3" element={<Verification3/>}/>
                </Routes>
            </div>
    </Router>
            </UserProvider>
)}

export default App;
