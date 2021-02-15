import React, { useState } from "react";
import {
  Button,
  Card,
  Grid,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

export const Bonds: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container justify="center">
      <Grid
        item
        xs={12}
        style={{
          maxWidth: 420,
          borderWidth: 1,
          borderStyle: "solid",
          borderRadius: 10,
          padding: 20,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          style={{ justifyContent: "center" }}
        >
          <Tab label="Mint" />
          <Tab label="Reedem" />
        </Tabs>
        {value === 0 && <Mint />}
        {value === 1 && <Reedem />}
      </Grid>
    </Grid>
  );
};

const Mint: React.FC = () => {
  return (
    <Card elevation={3} style={{ padding: 20 }}>
      <Grid alignItems="center" style={{ fontSize: 16 }}>
        <Typography style={{ textAlign: "center", marginBottom: 10 }}>
          Lock USDx
        </Typography>
        <br />
        <Grid container justify="center">
          <Typography>Network Overview</Typography>
        </Grid>
        <Grid container justify="center">
          <Typography>Total Locked Dollars:</Typography>
          <Typography>714,930.44 USDx</Typography>
        </Grid>
        <Grid container justify="center">
          <Typography>Total Bonds:</Typography>
          <Typography>417,131.004 xBond</Typography>
        </Grid>
        <Grid container justify="center">
          <Typography>Bond To Share Ratio:</Typography>
          <Typography>0%</Typography>
        </Grid>
        <br />
        <Grid container justify="center">
          <Typography>User Overview</Typography>
        </Grid>
        <Grid container justify="center">
          <Typography>USDx available:</Typography>
          <Typography>0 USDx</Typography>
        </Grid>
        <Grid container justify="center">
          <Typography>xBond Ownership:</Typography>
          <Typography> - %</Typography>
        </Grid>
        <br />
        <Grid container justify="center">
          <Button variant="contained" color="primary">
            Convert 0.00 xBond for USDx
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

const Reedem: React.FC = () => {
  return (
    <Card elevation={3} style={{ padding: 20 }}>
      <Grid alignItems="center" style={{ fontSize: 16 }}>
        <Typography style={{ textAlign: "center", marginBottom: 10 }}>
          Reedem xBond
        </Typography>
        <br />
        <Grid container justify="center">
          <Typography>Network Overview</Typography>
        </Grid>
        <Grid container justify="center">
          <Typography>Total Locked Dollars:</Typography>
          <Typography>714,930.44 USDx</Typography>
        </Grid>
        <Grid container justify="center">
          <Typography>Total Bonds:</Typography>
          <Typography>417,131.004 xBond</Typography>
        </Grid>
        <Grid container justify="center">
          <Typography>Bond To Share Ratio:</Typography>
          <Typography>0%</Typography>
        </Grid>
        <br />
        <Grid container justify="center">
          <Typography>User Overview</Typography>
        </Grid>
        <Grid container justify="center">
          <Typography>USDx available:</Typography>
          <Typography>0 USDx</Typography>
        </Grid>
        <Grid container justify="center">
          <Typography>xBond Ownership:</Typography>
          <Typography> - %</Typography>
        </Grid>
        <br />
        <Grid container justify="center">
          <Button variant="contained" color="primary">
            Convert 0.00 xBond for USDx
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};
