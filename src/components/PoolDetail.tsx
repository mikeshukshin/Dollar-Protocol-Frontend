import React from 'react';
import {
  Button,
  Card,
  CardMedia,
  Grid,
  Typography
} from '@material-ui/core';

type Props = {
  poolId: number;
  onBack: () => void;
};

const PoolDetail: React.FC<Props> = ({
  poolId,
  onBack
}: Props) => {
  return (<Grid container justify="center">
    <Grid item xs={12} style={{maxWidth: 420, borderWidth: 1, borderStyle: 'solid', borderRadius: 10, padding: 20}}>
      <Button onClick={onBack}>back</Button>
      <Card elevation={3} style={{padding: 20}}>
        <Grid alignItems="center">
          <Typography style={{textAlign: 'center', marginBottom: 10}}>Overview</Typography>
          <Grid container justify="space-between">
            <Typography style={{fontSize: 14}}>Pool Pro-Rata Payout:</Typography>
            <Typography style={{fontSize: 14}}>13.333%</Typography>
          </Grid>
          <Grid container justify="space-between">
            <Typography style={{fontSize: 14}}>Global Locked Value:</Typography>
            <Typography style={{fontSize: 14}}>$936,169.33</Typography>
          </Grid>
          <Grid container justify="space-between">
            <Typography style={{fontSize: 14}}>Pool Locked Value:</Typography>
            <Typography style={{fontSize: 14}}>$521,350.76</Typography>
          </Grid>
          <br/>
          <Grid container justify="space-between">
            <Typography style={{fontSize: 14}}>Your Locked LP:</Typography>
            <Typography style={{fontSize: 14}}>0</Typography>
          </Grid>
          <Grid container justify="space-between">
            <Typography style={{fontSize: 14}}>Your Principle:</Typography>
            <Grid item direction="column" alignContent="flex-end">
              <Typography style={{fontSize: 14}}>0.0000 TTL</Typography>
              <Typography style={{fontSize: 14}}>033.0000 ETH</Typography>
            </Grid>
          </Grid>
          <br/>
          <Grid container justify="space-between">
            <Typography style={{fontSize: 14}}>Pending TTL:</Typography>
            <Typography style={{fontSize: 14}}>10.3</Typography>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  </Grid>);
}

export default PoolDetail;
