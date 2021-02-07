import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UseWalletProvider } from 'use-wallet';
import Home from 'views/Home';

const NETWORK_ID = Number(process.env.NETWORK_ID) || 42;

const App: React.FC = () => (
  <UseWalletProvider
    chainId={NETWORK_ID}
    connectors={{
      walletconnect: { rpcUrl: 'https://mainnet.eth.aragon.network/' },
    }}
  >
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
  </UseWalletProvider>
);

export default App;
