import React, { createContext, useState } from 'react';

import PropTypes from 'prop-types';

type propType = { loggedIn: boolean; setLoggedIn: any };

const LoginContext = createContext<propType>({
  loggedIn: false,
  setLoggedIn: () => {},
});

const LoginContextProvider: React.FC = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

LoginContextProvider.propTypes = {
  children: PropTypes.any,
};

export { LoginContextProvider, LoginContext };
