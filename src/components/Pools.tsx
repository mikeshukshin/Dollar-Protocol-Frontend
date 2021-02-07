import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';

type Props = {
  onSelect: (id: number) => void;
};

const Pools: React.FC<Props> = ({
  onSelect
}: Props) => {
  return (
    <Grid>
      <Typography variant="h5" style={{marginTop: 35}}>LP Mining</Typography>
      <Card>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>
                <span>Pool</span>
              </TableCell>
              <TableCell>
                <span>Tokens</span>
              </TableCell>
              <TableCell>
                <span>Lock duration</span>
              </TableCell>
              <TableCell>
                <span>Total Value Locked</span>
              </TableCell>
              <TableCell>
                <span>APY</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow onClick={() => onSelect(0)}>
              <TableCell>
                <Card elevation={0} style={{display: 'flex', alignItems: 'center'}}>
                  <CardMedia
                    component="img"
                    style={{width: 30, height: 30}}
                    image="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                  />
                  <Grid direction="column" alignItems="center" justify="flex-start" style={{marginLeft: 10}}>
                    <Typography variant="body1" style={{fontSize: 14}}>ETH-TTL</Typography>
                    <Typography style={{fontSize: 14, color: '6B7280'}}>UniswapV2 ETH-TTL</Typography>
                  </Grid>
                </Card>
              </TableCell>
              <TableCell>
                <Card elevation={0} style={{display: 'flex', alignItems: 'center'}}>
                  <CardMedia
                    component="img"
                    style={{width: 15, height: 15}}
                    image="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                  />
                  <Typography variant="body1" style={{fontSize: 14, marginLeft: 10}}>1000 ETH</Typography>
                </Card>
                <Card elevation={0} style={{display: 'flex', alignItems: 'center'}}>
                  <CardMedia
                    component="img"
                    style={{width: 15, height: 15}}
                    image="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                  />
                  <Typography variant="body1" style={{fontSize: 14, marginLeft: 10}}>1000 TTL</Typography>
                </Card>
              </TableCell>
              <TableCell>
                <Typography variant="body1" style={{fontSize: 14}}>No lock</Typography>
              </TableCell>
              <TableCell>
                <span>$100,000,000</span>
              </TableCell>
              <TableCell>
                <span>15%</span>
              </TableCell>
            </TableRow>

            <TableRow onClick={() => onSelect(1)}>
              <TableCell>
                <Card elevation={0} style={{display: 'flex', alignItems: 'center'}}>
                  <CardMedia
                    component="img"
                    style={{width: 30, height: 30}}
                    image="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                  />
                  <Grid direction="column" alignItems="center" justify="flex-start" style={{marginLeft: 10}}>
                    <Typography variant="body1" style={{fontSize: 14}}>ETH-TTL</Typography>
                    <Typography style={{fontSize: 14, color: '6B7280'}}>UniswapV2 ETH-TTL</Typography>
                  </Grid>
                </Card>
              </TableCell>
              <TableCell>
                <Card elevation={0} style={{display: 'flex', alignItems: 'center'}}>
                  <CardMedia
                    component="img"
                    style={{width: 15, height: 15}}
                    image="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                  />
                  <Typography variant="body1" style={{fontSize: 14, marginLeft: 10}}>1000 ETH</Typography>
                </Card>
                <Card elevation={0} style={{display: 'flex', alignItems: 'center'}}>
                  <CardMedia
                    component="img"
                    style={{width: 15, height: 15}}
                    image="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                  />
                  <Typography variant="body1" style={{fontSize: 14, marginLeft: 10}}>1000 TTL</Typography>
                </Card>
              </TableCell>
              <TableCell>
                <Typography variant="body1" style={{fontSize: 14}}>1 week lock</Typography>
              </TableCell>
              <TableCell>
                <span>$100,000,000</span>
              </TableCell>
              <TableCell>
                <span>15%</span>
              </TableCell>
            </TableRow>

            <TableRow onClick={() => onSelect(2)}>
              <TableCell>
                <Card elevation={0} style={{display: 'flex', alignItems: 'center'}}>
                  <CardMedia
                    component="img"
                    style={{width: 30, height: 30}}
                    image="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                  />
                  <Grid direction="column" alignItems="center" justify="flex-start" style={{marginLeft: 10}}>
                    <Typography variant="body1" style={{fontSize: 14}}>ETH-TTL</Typography>
                    <Typography style={{fontSize: 14, color: '6B7280'}}>UniswapV2 ETH-TTL</Typography>
                  </Grid>
                </Card>
              </TableCell>
              <TableCell>
                <Card elevation={0} style={{display: 'flex', alignItems: 'center'}}>
                  <CardMedia
                    component="img"
                    style={{width: 15, height: 15}}
                    image="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                  />
                  <Typography variant="body1" style={{fontSize: 14, marginLeft: 10}}>1000 ETH</Typography>
                </Card>
                <Card elevation={0} style={{display: 'flex', alignItems: 'center'}}>
                  <CardMedia
                    component="img"
                    style={{width: 15, height: 15}}
                    image="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                  />
                  <Typography variant="body1" style={{fontSize: 14, marginLeft: 10}}>1000 TTL</Typography>
                </Card>
              </TableCell>
              <TableCell>
                <Typography variant="body1" style={{fontSize: 14}}>1 month lock</Typography>
              </TableCell>
              <TableCell>
                <span>$100,000,000</span>
              </TableCell>
              <TableCell>
                <span>15%</span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </Grid>
  );
}

export default Pools;
