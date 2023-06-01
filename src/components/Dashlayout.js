import React from "react";
import { Card, Grid } from "@mui/material";
import Sider from "./layout/Sider";
import TopNav from "./layout/TopNav";
import { Stack } from "@mui/system";

const Dashboardlayout = (props) => {
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

export default Dashboardlayout;
