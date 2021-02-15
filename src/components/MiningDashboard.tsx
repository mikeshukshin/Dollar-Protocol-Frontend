import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Info, Pools, PoolDetail } from ".";

export const MiningDashboard: React.FC = () => {
  const [poolId, setPoolId] = useState<number>(-1);

  return (
    <Grid style={{ paddingTop: 20 }}>
      {poolId === -1 && (
        <>
          <Info />
          <Pools onSelect={setPoolId} />
        </>
      )}
      {poolId >= 0 && (
        <PoolDetail poolId={poolId} onBack={() => setPoolId(-1)} />
      )}
    </Grid>
  );
};
