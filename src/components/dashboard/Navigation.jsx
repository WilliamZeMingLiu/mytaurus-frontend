import React, {useState} from 'react';
import {
    Card, CardContent,
    Collapse,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    SwipeableDrawer
} from "@material-ui/core";
import Header from "./Header";
import DashboardIcon from '@material-ui/icons/Dashboard';
import HistoryIcon from '@material-ui/icons/History';
import MoneyIcon from '@material-ui/icons/Money';
import AssessmentIcon from '@material-ui/icons/Assessment';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import "../../css/dashboard/NavigationStyle.css"
import {ExpandLess, ExpandMore} from "@material-ui/icons";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState({
        analytics: false,       // is analytics opened?
    })

    return (
        <>
            <Header onMenuClicked={() => setIsOpen(true)}/>
            <SwipeableDrawer
                onClose={() => setIsOpen(false)}
                onOpen={() => setIsOpen(true)}
                open={isOpen}
                anchor="left">
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            <img src="images/service_logo.png" id="logo"/>
                        </ListSubheader>
                    }
                >
                    <Card id="worthCard">
                        <CardContent>
                            <h4>My Net Worth</h4>
                            <p>$19,148.39</p>
                        </CardContent>
                    </Card>
                    {/* Dashboard */}
                    <ListItem button>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>

                    {/* Asset History */}
                    <ListItem button>
                        <ListItemIcon>
                            <HistoryIcon />
                        </ListItemIcon>
                        <ListItemText primary="Asset History" />
                    </ListItem>

                    {/* Balance */}
                    <ListItem button>
                        <ListItemIcon>
                            <MoneyIcon />
                        </ListItemIcon>
                        <ListItemText primary="Balance" />
                    </ListItem>

                    {/* Analytics Dropdown */}
                    <ListItem button onClick={() => setDropdownVisible({ ...dropdownVisible, analytics: !dropdownVisible.analytics })}>
                        <ListItemIcon>
                            <AssessmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Analytics" />
                        {dropdownVisible.analytics ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={dropdownVisible.analytics} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button>
                                <ListItemText primary="Finance" className="dropdownItem"/>
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Vehicles" className="dropdownItem"/>
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Trigger" className="dropdownItem"/>
                            </ListItem>
                        </List>
                    </Collapse>

                    {/* Maintenance */}
                    <ListItem button>
                        <ListItemIcon>
                            <NotificationsNoneIcon />
                        </ListItemIcon>
                        <ListItemText primary="Maintenance" />
                        <ExpandMore />
                    </ListItem>

                    {/* Settings */}
                    <ListItem button>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                        <ExpandMore />
                    </ListItem>

                    {/* About */}
                    <ListItem button>
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItem>

                    {/* Help */}
                    <ListItem button>
                        <ListItemIcon>
                            <HelpOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary="Help" />
                    </ListItem>
                </List>
            </SwipeableDrawer>
        </>

    );
};

export default Navigation;