import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  createGlobalStyle,
  ThemeProvider as SCThemeProvider,
} from "styled-components";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core/styles";
import { UseWalletProvider } from "use-wallet";

import { theme } from "./theme";
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
  <MaterialThemeProvider theme={theme}>
    <SCThemeProvider theme={{}}>
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
    </SCThemeProvider>
  </MaterialThemeProvider>
);

export default App;
