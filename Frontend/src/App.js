
import React from 'react';

import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Main_left from './components/mainleft';
import Main_right from './components/mainright';
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

  return (
      <Router>
        <main className='flex p-0 m-0 bg-gray-800 font-[Raleway] '>
          <Main_left />
          <Routes>
            <Route path='/traintoexcellency/Frontend-build/' element={<Main_right />} />
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
