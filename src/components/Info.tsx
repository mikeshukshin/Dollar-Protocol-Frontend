import React from "react";
import { Card, CardMedia, Grid, Typography } from "@material-ui/core";

export const Info: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Card elevation={3} style={{ display: "flex", padding: 20 }}>
          <CardMedia
            component="img"
            style={{ width: 60, height: 60 }}
            image="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
          />
          <Grid
            direction="column"
            alignItems="center"
            justify="flex-start"
            style={{ marginLeft: 10 }}
          >
            <Typography>Total Token</Typography>
            <Typography>$ 1.1</Typography>
            {/* <Typography>$ 1.1</Typography> */}
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card elevation={3} style={{ display: "flex", padding: 20 }}>
          <CardMedia
            component="img"
            style={{ width: 60, height: 60 }}
            image="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
          />
          <Grid
            direction="column"
            alignItems="center"
            justify="flex-start"
            style={{ marginLeft: 10 }}
          >
            <Typography>Total Value Locked ($)</Typography>
            <Typography>$ 1.1</Typography>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};
