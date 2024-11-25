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

    const url = new URL(window.location.href);
    console.log(url)
    // const someVar = url.searchParams.get('someVar')
    const adID = url.searchParams.get('adID')
    // console.log(someVar)
    // console.log(adID)

    return (
    <Router>
        <UserContext.Provider value={{userId, setUserId}}>
            <div className={"app"}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Catalog" element={<Catalog/>}/>
                    <Route path="/Advertisement" element={<Advertisement adID = {adID}/>}/>
                    <Route path="/Profile" element={<Profile/>}/>
                    <Route path="/Registration" element={<Registration/>}/>
                    <Route path="/Verification0" element={<Verification0/>}/>
                    <Route path="/Verification1" element={<Verification1/>}/>
                    <Route path="/Verification2" element={<Verification2/>}/>/
                    <Route path="/Verification3" element={<Verification3/>}/>
                </Routes>
            </div>
        </UserContext.Provider>
    </Router>)
}

export default App;
