import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './component/home';
import About from './component/About';
import Profile from './component/Profile';
import './App.css';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/About">소개</Link>
        </li>
        <li>
          <Link to="/profile/abc">abc profile</Link>
        </li>
        <li>
          <Link to="/profile/cde">cde profile</Link>
        </li>
      </ul>

      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
      <Route path="/profile/:username" component={Profile} />
    </div>
  );
}

export default App;
