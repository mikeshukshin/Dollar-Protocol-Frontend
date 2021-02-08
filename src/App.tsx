import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { UseWalletProvider } from "use-wallet";
import Home from "views/Home";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: 'DM Sans', sans-serif;
}
`;

const NETWORK_ID = Number(process.env.NETWORK_ID) || 42;

const App: React.FC = () => (
  <ThemeProvider theme={{}}>
    <UseWalletProvider
      chainId={NETWORK_ID}
      connectors={{
        walletconnect: { rpcUrl: "https://mainnet.eth.aragon.network/" },
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
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
