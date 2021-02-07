import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Container,
  Tab,
  Tabs,
  Typography
} from '@material-ui/core';
import { Governance, MiningDashboard, Prices } from 'components';

const Home: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container fixed>
      <Typography variant="h5" style={{marginTop: 10, marginBottom: 40}}>Total Protocol</Typography>
      <Card elevation={3}>
        <CardContent>
          <Typography gutterBottom>
            Dashboard
          </Typography>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Mine Share" />
            <Tab label="Governance" />
            <Tab label="Prices" />
          </Tabs>
          {
            value === 0 && <MiningDashboard />
          }
          {
            value === 1 && <Governance />
          }
          {
            value === 2 && <Prices />
          }
        </CardContent>
      </Card>
    </Container>
  );
}

export default Home;
