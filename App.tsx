import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import InchargeDashboard from './pages/InchargeDashboard';
import LanguageSelector from './components/LanguageSelector';
import VoiceAssistant from './components/VoiceAssistant';
import DarkModeToggle from './components/DarkModeToggle';
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  return (
    <Router>
      <div className="app">
        <header>
          <h1>{t('common.title')}</h1>
          <div>
            <LanguageSelector onChange={handleLanguageChange} />
            <DarkModeToggle />
            <VoiceAssistant />
            <button onClick={handleLogout} className="logout-btn">{t('common.logout')}</button>
          </div>
        </header>
        <main className="container">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/user-dashboard" component={UserDashboard} />
            <Route path="/admin-dashboard" component={AdminDashboard} />
            <Route path="/incharge-dashboard" component={InchargeDashboard} />
            <Route path="/" component={Login} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;