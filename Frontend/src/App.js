
import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import MainLeft from './components/mainleft';
import MainRight from './components/mainright';
import Development from './components/Development';
import Language from './components/Language';
import Explore from './components/explore';
import Contact from './components/Contact';
import Registation from './components/Registation';

import AiML from './components/DevelopmentRoutes/ALMLdevelopment/AIML_development';

import Gamedev from './components/DevelopmentRoutes/Gamedevelopment/Gamedevelopment';

import AppDev from './components/DevelopmentRoutes/APPdevelopment/appdevelopmet';

import Webdev from './components/DevelopmentRoutes/webdevelopmentRoutes/webdevelopment';
import AiChatPage from './components/AiChatPage';
function App() {
  const [Hide_Left, setHide_Left] = useState(false);

  const toggleHideLeft = () => {
    setHide_Left(!Hide_Left);
  };

  return (

      <Router>
        <main className='flex p-0 m-0 bg-[#3b3b6d] font-[Raleway] '>
          <MainLeft toggleHideLeft={toggleHideLeft} Hide_Left={Hide_Left} />
          <Routes>
            <Route path='/traintoexcellency/Frontend-build/' element={<MainRight toggleHideLeft={toggleHideLeft} Hide_Left={Hide_Left} />} />
            <Route path="/traintoexcellency/Frontend-build/development" element={<Development />} />
            <Route path="/traintoexcellency/Frontend-build/language" element={<Language />} />
            <Route path="/traintoexcellency/Frontend-build/explore" element={<Explore />} />
            <Route path="/traintoexcellency/Frontend-build/About-us" element={<Contact />} />
            <Route path="/traintoexcellency/Frontend-build/ai-chat" element={<AiChatPage />} />
            <Route path="/traintoexcellency/Frontend-build/Register" element={<Registation />} />

            <Route path="/traintoexcellency/Frontend-build/development/appdev" element={<AppDev />} />

            <Route path="/traintoexcellency/Frontend-build/development/AIML" element={<AiML />} />

            <Route path="/traintoexcellency/Frontend-build/development/gamedev" element={<Gamedev />} />


            <Route path="/traintoexcellency/Frontend-build/development/webdev" element={<Webdev />} />
          </Routes>
        </main>
      </Router>
  );
}

export default App;
