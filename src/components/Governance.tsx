import React from 'react';
import {
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';

const Governance: React.FC = () => {
  return (<Grid style={{paddingTop: 20}}>
    <Card>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>
              <span>Rebase Calculator</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Grid container direction="row" xs={12} justify="center">
                <Grid container xs={6} justify="center">
                  <Grid>
                    <Typography>PROTOCOL PARAMETERS</Typography>
                    <Typography>PROTOCOL PARAMETERS</Typography>
                    <Typography>PROTOCOL PARAMETERS</Typography>
                  </Grid>
                </Grid>
                <Grid container xs={6} justify="center">
                  <Grid>
                    <Typography>PROTOCOL PARAMETERS</Typography>
                    <Typography>PROTOCOL PARAMETERS</Typography>
                    <Typography>PROTOCOL PARAMETERS</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  </Grid>);
}

export default Governance;
