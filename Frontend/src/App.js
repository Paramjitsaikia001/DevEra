import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLeft from './components/layout/mainleft';
import MainRight from './components/layout/mainright';
import Development from './components/pages/Development';
import Language from './components/pages/Language';
import Explore from './components/pages/explore';
import Contact from './components/pages/Contact';
import Registation from './components/forms/Registation';

import AiML from './components/DevelopmentRoutes/ALMLdevelopment/AIML_development';
import Gamedev from './components/DevelopmentRoutes/Gamedevelopment/Gamedevelopment';
import AppDev from './components/DevelopmentRoutes/APPdevelopment/appdevelopmet';
import Webdev from './components/DevelopmentRoutes/webdevelopmentRoutes/webdevelopment';
import FrontendDev from './components/DevelopmentRoutes/FrontendDevelopment/FrontendRoadmap';
import AiChatPage from './components/ui/AiChatPage';
import BackendRoadmap from './components/DevelopmentRoutes/BackendDev/BackendRoadmap';
import BlockchainDev from './components/DevelopmentRoutes/Blockchain/Roadmap';
import Profile from './components/pages/Profile';
import { ROUTES } from './constants/routes';

function App() {
  const [Hide_Left, setHide_Left] = useState(false);

  const toggleHideLeft = () => {
    setHide_Left(!Hide_Left);
  };

  return (
    <Router>
      <main className='flex p-0 m-0 bg-primary-bg font-inter'>
        <MainLeft toggleHideLeft={toggleHideLeft} Hide_Left={Hide_Left} />
        <Routes>
          <Route path={ROUTES.HOME} element={<MainRight toggleHideLeft={toggleHideLeft} Hide_Left={Hide_Left} />} />
          <Route path={ROUTES.DEVELOPMENT} element={<Development />} />
          <Route path={ROUTES.LANGUAGE} element={<Language />} />
          <Route path={ROUTES.EXPLORE} element={<Explore />} />
          <Route path={ROUTES.ABOUT_US} element={<Contact />} />
          <Route path={ROUTES.AI_CHAT} element={<AiChatPage />} />
          <Route path={ROUTES.REGISTER} element={<Registation />} />

          <Route path={ROUTES.APP_DEV} element={<AppDev />} />
          <Route path={ROUTES.AI_ML} element={<AiML />} />
          <Route path={ROUTES.GAME_DEV} element={<Gamedev />} />
          <Route path={ROUTES.WEB_DEV} element={<Webdev />} />
          <Route path={ROUTES.FRONTEND_DEV} element={<FrontendDev />} />
          <Route path={ROUTES.BACKEND_DEV} element={<BackendRoadmap />} />
          <Route path={ROUTES.BLOCKCHAIN_DEV} element={<BlockchainDev />} />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
