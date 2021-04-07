import React, { useContext } from 'react';
import { Route, Link } from 'react-router-dom';

// Style imports
import './materialize.scss';
import './styles/app.scss';

// Page imports

// Component imports
import Header from './components/Header';

// Context imports
import { MaterializeCssContext } from './contexts/MaterializeCssContext';
import { LoginContext } from './contexts/LoginContext';

import data from './res/data.png';

const App: React.FC = () => {
  const materializeContext = useContext(MaterializeCssContext);
  materializeContext.materializeReinit();

  const loginContext = useContext(LoginContext);

  return (
    <>
      <Header />
      <Route path="/data">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2 style={{ marginBottom: '2rem' }}>Your Plant&apos;s Metrics</h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={data} alt="" />
          </div>
        </div>
      </Route>
      <Route path="/" exact>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div>
            <h3>Sign In:</h3>
            <label className="input-label" htmlFor="username">
              Username
            </label>
            <input type="text" id="username" style={{ color: 'white' }}></input>
            <label className="input-label" htmlFor="password">
              Password
            </label>
            <input type="text" id="password" style={{ color: 'white' }}></input>
            <Link
              to={'/data'}
              style={{
                marginTop: '1rem',
                width: '10rem',
                height: '3rem',
                border: '2px solid #6E7F89',
                background: '#',
                borderRadius: '1rem',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className="waves-effect waves-light button"
              onClick={() => {
                loginContext.setLoggedIn(true);
              }}
            >
              <p>Sign In</p>
            </Link>
          </div>
        </div>
      </Route>
    </>
  );
};

export default App;
