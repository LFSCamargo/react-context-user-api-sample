import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Router } from './router';
import { UserProvider } from './stores';

const App = () => {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
