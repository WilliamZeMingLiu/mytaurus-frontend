import React from 'react';
import "../../css/dashboard/HeaderStyle.css"
import {AppBar, IconButton, SvgIcon, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const Header = ({ onMenuClicked }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className="menu" color="inherit" aria-label="menu">
                    <MenuIcon onClick={onMenuClicked} />
                </IconButton>
                <Typography variant="h6" >
                    My Taurus
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;