import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import InfoIcon from '@material-ui/icons/Info';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import HistoryIcon from '@material-ui/icons/History';
import BarChartIcon from '@material-ui/icons/BarChart';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Dashboard from '../Dashboard/Dashboard';

import { auth } from '../firebase.js';
import { Redirect, useHistory } from 'react-router-dom';

const drawerWidth = 190;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function NavBar({ component: RouteComponent}) {
  const classes = useStyles();
  const [drop, setDrop] = React.useState(false);


  //Routing
  const history = useHistory();

  async function renderSignOut() {
    await auth.signOut();
    history.push("/login");
  }

  const handleDrop = () => {
    setDrop(!drop);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" noWrap style={{ flexGrow: 1 }}>
            MyTaurus
          </Typography>
          <IconButton onClick={() => renderSignOut()}
           color="inherit" aria-label="account">
            <AccountCircleIcon fontSize="large"/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem>
              <ListItemText primary="Your Portfolio"/>
            </ListItem>
            <ListItem>
              <ListItemIcon><AttachMoneyIcon/></ListItemIcon>
              <ListItemText primary="$110,392.23"/>
            </ListItem>
          </List>
          <Divider />

          <List>
            <ListItem button>
              <ListItemIcon><AccountBalanceIcon/></ListItemIcon>
              <ListItemText primary="Balance" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><HistoryIcon/></ListItemIcon>
              <ListItemText primary="Asset History" />
            </ListItem>
            <ListItem button onClick={handleDrop}>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Analytics" />
              {drop ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={drop} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon><AccountBalanceWalletIcon /></ListItemIcon>
                  <ListItemText primary="Finance" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon><DirectionsCarIcon /></ListItemIcon>
                  <ListItemText primary="Vehicles" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon><DoubleArrowIcon /></ListItemIcon>
                  <ListItemText primary="Trigger" />
                </ListItem>
              </List>
            </Collapse>
          </List>  
          <Divider />

          <List>
            <ListItem button>
              <ListItemIcon><SettingsIcon/></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><InfoIcon/></ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><HelpOutlineIcon/></ListItemIcon>
              <ListItemText primary="Help" />
            </ListItem>
          </List>    
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <RouteComponent />
      </main>
    </div>
  );
}

























/*

export default function NavBar() {
  //Routing
  const history = useHistory();

  async function renderSignOut() {
    await auth.signOut();
    history.push("/login");
  }


  //Material-UI functions
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [drop, setDrop] = React.useState(false);

  const handleDrop = () => {
    setDrop(!drop);
  };

  /*const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, 
          {[classes.appBarShift]: open,}
        )}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            //onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h5" noWrap style={{ flexGrow: 1 }}>
            MyTaurus
          </Typography>
          

          <IconButton onClick={() => renderSignOut()}
           color="inherit" aria-label="account">
            <AccountCircleIcon fontSize="large"/>
          </IconButton>
          
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>

        <h1>
          MyTaurus
        </h1>

        <Divider />

        <List>
          <ListItem>
            <ListItemText primary="Your Portfolio"/>
          </ListItem>
          <ListItem>
            <ListItemIcon><AttachMoneyIcon/></ListItemIcon>
            <ListItemText primary="$110,392.23"/>
          </ListItem>
        </List>
        <Divider />

        <List>
          <ListItem button>
            <ListItemIcon><AccountBalanceIcon/></ListItemIcon>
            <ListItemText primary="Balance" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><HistoryIcon/></ListItemIcon>
            <ListItemText primary="Asset History" />
          </ListItem>
          <ListItem button onClick={handleDrop}>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Analytics" />
            {drop ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={drop} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon><AccountBalanceWalletIcon /></ListItemIcon>
                <ListItemText primary="Finance" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon><DirectionsCarIcon /></ListItemIcon>
                <ListItemText primary="Vehicles" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon><DoubleArrowIcon /></ListItemIcon>
                <ListItemText primary="Trigger" />
              </ListItem>
            </List>
          </Collapse>
        </List>  
        <Divider />

        <List>
          <ListItem button>
            <ListItemIcon><SettingsIcon/></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><InfoIcon/></ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><HelpOutlineIcon/></ListItemIcon>
            <ListItemText primary="Help" />
          </ListItem>
        </List>        
      </Drawer>
     
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Dashboard />
      </main>

    </div>
  );
}
*/