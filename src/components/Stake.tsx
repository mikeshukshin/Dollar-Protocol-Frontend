import React from "react";
import {
  Button,
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

export const Staking: React.FC = () => {
  return (
    <Grid container justify="center">
      <Card elevation={3} style={{ padding: 20, margin: 20, fontSize: 16 }}>
        <Grid alignItems="center">
          <Grid container justify="center">
            <Typography>Staking SHARE Payout:</Typography>
            <Typography>15%</Typography>
          </Grid>
          <Grid container justify="center">
            <Typography>APY:</Typography>
            <Typography>15%</Typography>
          </Grid>
          <Grid container justify="center">
            <Typography>Global Staked Share:</Typography>
            <Typography>10,487,741.42 SHARE</Typography>
          </Grid>
          <Grid container justify="center">
            <Typography>Pending Unstake:</Typography>
            <Typography>248,749.5 SHARE</Typography>
          </Grid>
          <Grid container justify="center">
            <Button variant="contained" color="primary">
              Stake
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Card elevation={3} style={{ padding: 20, margin: 20, fontSize: 16 }}>
        <Grid alignItems="center">
          <Grid container justify="center">
            <Typography>Staking SHARE Payout:</Typography>
            <Typography>15%</Typography>
          </Grid>
          <Grid container justify="center">
            <Typography>APY:</Typography>
            <Typography>15%</Typography>
          </Grid>
          <Grid container justify="center">
            <Typography>Global Staked Share:</Typography>
            <Typography>10,487,741.42 SHARE</Typography>
          </Grid>
          <Grid container justify="center">
            <Typography>Pending Unstake:</Typography>
            <Typography>248,749.5 SHARE</Typography>
          </Grid>
          <Grid container justify="center">
            <Button variant="contained" color="primary">
              Stake
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};
