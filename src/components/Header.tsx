import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { LoginContext } from '../contexts/LoginContext';

// Style imports
import '../styles/nav.scss';

// Page imports

// Component imports

// Context imports

import logo from '../res/logo.png';

import { routes } from './config';

const Header: React.FC = () => {
  const [_, setSidenavShowing] = useState<Boolean>(false);
  const loginContext = useContext(LoginContext);

  return (
    <header>
      <nav>
        {/* Main navbar list */}
        <ul>
          {/* Sidenav */}
          <li id="sidenav-trigger">
            <a href="#!" onClick={() => setSidenavShowing(true)}>
              {/* <SidenavMenu /> */}
            </a>
          </li>
          <li id="brand-logo">
            <Link to={routes.home} onClick={() => {}}>
              The Smart Grower
              <img
                src={logo}
                alt=""
                style={{ width: '3rem', height: '3rem' }}
              />
            </Link>
          </li>
          {/* vvv for flex positioning if needed vvv */}
          {/* <li id="invisible-item"></li> */}
          {loginContext.loggedIn ? (
            <li>
              <Link
                to={'/'}
                onClick={() => {
                  loginContext.setLoggedIn(false);
                }}
              >
                Sign Out
              </Link>
            </li>
          ) : (
            <li style={{ width: '30rem' }}>
              Don&apos;t have an account?
              <Link
                style={{
                  textAlign: 'center',
                  marginLeft: '1rem',
                  background: '#77919A',
                  height: '2.5rem',
                  borderRadius: '1rem',
                }}
                to={'/data'}
                onClick={() => {
                  loginContext.setLoggedIn(true);
                }}
              >
                Sign Up
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
