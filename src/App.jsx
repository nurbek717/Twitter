import React from 'react';
import './App.css';
import {Context} from './Context/Authenticated';

import AuthenticatedApp from './Authenticatedapp';
import UnauthenticatedApp from './UnauthenticatedApp';

function App() {
	const { token } = React.useContext((Context));  

  if (token) {
     return <AuthenticatedApp/>
  }else{
    return <UnauthenticatedApp/>
    
  }
}

export default App;
