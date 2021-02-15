import React, { useState } from "react";
import {
  Card,
  CardContent,
  Container,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import { Bonds, MiningDashboard, Prices, Staking } from "components";

const Home: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container fixed>
      <Typography variant="h5" style={{ marginTop: 10, marginBottom: 40 }}>
        Dollar Protocol
      </Typography>
      <Card elevation={3}>
        <CardContent>
          <Typography gutterBottom>Dashboard</Typography>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Mine Share" />
            <Tab label="Stake" />
            <Tab label="Prices" />
            <Tab label="Bonds" />
          </Tabs>
          {value === 0 && <MiningDashboard />}
          {value === 1 && <Staking />}
          {value === 2 && <Prices />}
          {value === 3 && <Bonds />}
        </CardContent>
      </Card>
    </Container>
  );
};

export default Home;
