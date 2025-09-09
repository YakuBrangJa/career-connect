import React, {useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import {LandingPage} from './components/LandingPage';
import {StudentDashboard} from './components/StudentDashboard';
import {RecruiterDashboard} from './components/RecruiterDashboard';
import {StudentAuth} from './components/StudentAuth';
import {RecruiterAuth} from './components/RecruiterAuth';


export default function App () {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background">
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPageWrapper />} />

        {/* Student */}
        <Route
          path="/student/auth"
          element={<StudentAuth onBack={() => navigate(-1)} onAuthSuccess={setCurrentUserWrapper(setCurrentUser, '/student/dashboard')} />}
        />
        <Route
          path="/student/dashboard"
          element={<StudentDashboard onLogout={logoutWrapper(setCurrentUser)} />}
        />

        {/* Recruiter */}
        <Route
          path="/recruiter/auth"
          element={<RecruiterAuth onBack={() => navigate(-1)} onAuthSuccess={setCurrentUserWrapper(setCurrentUser, '/recruiter/dashboard')} />}
        />
        <Route
          path="/recruiter/dashboard"
          element={<RecruiterDashboard onLogout={logoutWrapper(setCurrentUser)} />}
        />
      </Routes>
    </div>
  );
}

// --- Wrappers to handle navigation and state ---
function LandingPageWrapper () {
  return <LandingPage />;
}

function setCurrentUserWrapper (setCurrentUser: React.Dispatch<any>, redirectPath: string) {
  const navigate = useNavigate();
  return (userData: any) => {
    setCurrentUser(userData);
    navigate(redirectPath);
  };
}

function logoutWrapper (setCurrentUser: React.Dispatch<any>) {
  const navigate = useNavigate();
  return () => {
    setCurrentUser(null);
    navigate('/');
  };
}
