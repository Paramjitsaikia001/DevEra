// Application routes constants
export const ROUTES = {
    HOME: '/traintoexcellency/Frontend-build/',
    DEVELOPMENT: '/traintoexcellency/Frontend-build/development',
    LANGUAGE: '/traintoexcellency/Frontend-build/language',
    EXPLORE: '/traintoexcellency/Frontend-build/explore',
    ABOUT_US: '/traintoexcellency/Frontend-build/About-us',
    AI_CHAT: '/traintoexcellency/Frontend-build/ai-chat',
    REGISTER: '/traintoexcellency/Frontend-build/Register',

    // Development sub-routes
    APP_DEV: '/traintoexcellency/Frontend-build/development/appdev',
    AI_ML: '/traintoexcellency/Frontend-build/development/AIML',
    GAME_DEV: '/traintoexcellency/Frontend-build/development/gamedev',
    WEB_DEV: '/traintoexcellency/Frontend-build/development/webdev',
    FRONTEND_DEV:"/traintoexcellency/Frontend-build/development/frontend-web-dev"
    ,BACKEND_DEV:"/traintoexcellency/Frontend-build/development/backend"
};

export const NAV_ITEMS = [
    { path: ROUTES.DEVELOPMENT, label: 'Development', icon: 'developer_board' },
    { path: ROUTES.LANGUAGE, label: 'Language', icon: 'code_blocks' },
    { path: ROUTES.EXPLORE, label: 'Explore', icon: 'search' },
    { path: ROUTES.ABOUT_US, label: 'About us', icon: 'info' }
]; 