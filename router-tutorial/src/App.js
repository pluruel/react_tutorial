import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './component/home';
import About from './component/About';
import './App.css';
import HistorySample from './component/HistorySample';
import Profiles from './component/Profiles';

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
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>

      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/history" component={HistorySample} />
    </div>
  );
}

export default App;
