import React from "react";
import { Card, Grid } from "@mui/material";
import Sider from "../components/layout/Sider";
import TopNav from "../components/layout/TopNav";
import { Stack } from "@mui/system";

const Dashboard = (props) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={3} sm={2}>
        <Sider />
      </Grid>

      <Grid item xs={9} sm={10}>
        <Stack spacing={1}>
          <TopNav />
          <Card sx={{ minHeight: "90vh", paddingLeft: "1rem" }}>
            {props.children}
          </Card>
        </Stack>
      </Grid>
      {/* <Grid item xs={0} sm={1}></Grid> */}
    </Grid>
  );
};

export default Dashboard;
