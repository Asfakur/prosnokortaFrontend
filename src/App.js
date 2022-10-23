import './App.css';
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/home';
import NavBar from './components/shared/navBar';
import NotFound from "./components/shared/notFound";
import { getCurrentUser } from './services/authService';
import AuthorDashboard from './components/dashboard/author/authorDashboard';
import StudentDashboard from './components/dashboard/student/studentDashboard';
import LoginForm from './components/auth/loginForm';
import Logout from './components/auth/logOut';
import RegistrationForm from './components/auth/registrationForm';


function App() {

  const [user, setUser] = useState({});
  useEffect(() => {
    const newUser = getCurrentUser()
    setUser(newUser);
  }, [])

  return (
    <div>
      <Router>
        <NavBar user={user}></NavBar>

        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/register" component={RegistrationForm} />
          <Route path="/login" component={LoginForm} />

          <Route path="/logout" >
            <Logout />
          </Route>

          <Route path="/author">
            <AuthorDashboard />
          </Route>

          <Route path="/student">
            <StudentDashboard />
          </Route>

          <Route path="/">
            <NotFound />
          </Route>

        </Switch>

      </Router>
    </div>

  );
}

export default App;
