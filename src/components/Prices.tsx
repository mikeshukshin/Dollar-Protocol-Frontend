import React from "react";
import {
  Card,
  CardMedia,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

export const Prices: React.FC = () => {
  return (
    <Grid style={{ paddingTop: 20 }}>
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <span>COIN</span>
              </TableCell>
              <TableCell>
                <span>CIRCULATING / TOTAL SUPPLY</span>
              </TableCell>
              <TableCell>
                <span>MARKET CAP</span>
              </TableCell>
              <TableCell>
                <span>12-H TWAP</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Card
                  elevation={0}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <CardMedia
                    component="img"
                    style={{ width: 15, height: 15 }}
                    image="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                  />
                  <Grid
                    direction="column"
                    alignItems="center"
                    justify="flex-start"
                    style={{ marginLeft: 10 }}
                  >
                    <Typography variant="body1" style={{ fontSize: 14 }}>
                      TTL
                    </Typography>
                  </Grid>
                </Card>
              </TableCell>
              <TableCell>
                <Typography variant="body1" style={{ fontSize: 14 }}>
                  3,677,686 / 3,769,554 TTL
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" style={{ fontSize: 14 }}>
                  $3,938,801.71 / $4,037,192.8
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" style={{ fontSize: 14 }}>
                  $1.071
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
      <Typography variant="h5" style={{ marginTop: 35 }}>
        Rebase history
      </Typography>
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <span>Timestamp</span>
              </TableCell>
              <TableCell>
                <span>Status</span>
              </TableCell>
              <TableCell>
                <span>TTL Supply</span>
              </TableCell>
              <TableCell>
                <span>Price</span>
              </TableCell>
              <TableCell>
                <span>Defi TTL</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography variant="body1" style={{ fontSize: 14 }}>
                  Monday, Dec 28, 2020, 2:46:02 am
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" style={{ fontSize: 14 }}>
                  Positive
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" style={{ fontSize: 14 }}>
                  3,677,686 TTL
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" style={{ fontSize: 14 }}>
                  $1.07
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" style={{ fontSize: 14 }}>
                  $3,677,686
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </Grid>
  );
};
