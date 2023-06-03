import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Stack,
  MenuList,
  MenuItem,
  ListItemIcon,
  Typography,
  Paper,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ReceiptIcon from "@mui/icons-material/Receipt";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const sideMenus = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    path: "/dashboards",
  },
  {
    title: "Users",
    icon: <ProductionQuantityLimitsIcon />,
    path: "/users",
  },
  {
    title: "Analysis",
    icon: <ProductionQuantityLimitsIcon />,
    path: "/analyisis",
  },
  {
    title: "Public Pages",
    icon: <MonetizationOnIcon />,
    path: "/pages",
  },
  {
    title: "MetaData",
    icon: <ReceiptIcon />,
    path: "/metadata",
  },
  {
    title: "Datas",
    icon: <GroupIcon />,
    path: "/datas",
  },
  {
    path: "/newUser",
  },
];
const Component = (props) => {
  const navigate = useNavigate();
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <Card
      style={{
        color: "rgb(0, 33, 65)",
      }}
      sx={{ minHeight: "100vh" }}
    >
      <Paper sx={{ minHeight: "1rem" }}></Paper>
      <MenuList>
        <Stack spacing={1} justifyContent="center">
          {sideMenus?.map((menu, index) => (
            <MenuItem
              onClick={() => {
                setSelectedItemIndex(index);
                navigate(menu.path);
              }}
              selected={selectedItemIndex === index}
            >
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <Typography style={{ fontSize: 16 }}>{menu.title}</Typography>
            </MenuItem>
          ))}
        </Stack>
      </MenuList>
    </Card>
  );
};

export default Component;
