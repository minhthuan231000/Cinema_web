import React from 'react';
import './admin.css'
import { Badge } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DeleteIcon from '@material-ui/icons/Delete';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import FeatureAdd from './AddItem'
import FeatureDel from './DeleteItem'
import Revenue from './Revenue';
import ManageAccount from './ManageAccount'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Profile from './Profile';
import Cookies from 'universal-cookie'

const cookies = new Cookies();
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component={'span'} variant={'h5'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
export default function AdminPage(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const [anchorEl3, setAnchorEl3] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMenuOpen2 = Boolean(anchorEl2);
    const isMenuOpen3 = Boolean(anchorEl3);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleProfileMenuOpen2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleProfileMenuOpen3 = (event) => {
        setAnchorEl3(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const handleMenuClose2 = () => {
        setAnchorEl2(null);
    };
    const handleMenuClose3 = () => {
        setAnchorEl3(null);
    };
    let logout = () => {
        cookies.remove('user');
        window.location.reload();
    };
    //const [isProfile, setProfile] = React.useState(props.loggedInAdmin);
    const handleProfile = () => {
        //setProfile(true);
    }
    const menuId = 'primary-search-account-menu';
    const renderProfile = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleProfile}><a href='/Dashboard/Profile' style={{ textDecoration: 'none' }}>Profile</a></MenuItem>
            <MenuItem onClick={logout}><a href='/' style={{ textDecoration: 'none' }}>Logout</a></MenuItem>
        </Menu>
    );
    const renderMessage = (
        <Menu
            anchorEl={anchorEl3}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen3}
            onClose={handleMenuClose3}
        >
            <MenuItem onClick={handleMenuClose3}>{JSON.parse(localStorage.getItem('booking') || '0').length} Tickets Booked</MenuItem>
        </Menu>
    );
    const renderNofication = (
        <Menu
            anchorEl={anchorEl2}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen2}
            onClose={handleMenuClose2}
        >
            <MenuItem onClick={handleMenuClose2}>{0} User Registed</MenuItem>
        </Menu>
    );
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="admin_main">
            <header className="admin_header">
                <div className="admin_nav">
                    <div className="navbar-brand"><h3><a href="/" id="dashboard">dashboard</a></h3></div>
                    <div className="navbar-auth">
                        <li>
                            <IconButton color="inherit" onClick={handleProfileMenuOpen3}>
                                <Badge badgeContent={0} color="secondary" showZero>
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton color="inherit" onClick={handleProfileMenuOpen2}>
                                <Badge badgeContent={0} color="secondary" showZero>
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton aria-label="admin" color="inherit" onClick={handleProfileMenuOpen}>
                                <AccountCircle />
                            </IconButton>
                        </li>
                    </div>
                </div>
                {renderMessage}
                {renderNofication}
                {renderProfile}
            </header>
            <div className="admin_content">
                <div className="admin_sliderbar">
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        className="tabs"
                    >

                        <Tab className="tab" label={<span className="tabLabel">add</span>} {...a11yProps(0)} icon={<AddBoxIcon />} />
                        <Tab className="tab" label={<span className="tabLabel">delete</span>} {...a11yProps(1)} icon={<DeleteIcon />} />
                        <Tab className="tab" label={<span className="tabLabel">revenue</span>} {...a11yProps(2)} icon={<InsertChartIcon />} />
                        <Tab className="tab" label={<span className="tabLabel">manage</span>} {...a11yProps(3)} icon={<AccountBoxIcon />} />
                    </Tabs>
                </div>
                <div className="admin_layout">
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" render={() => {
                                return (
                                    <Redirect to="/Dashboard" />
                                )
                            }} />
                            <Route path="/">
                                {/* here add components contents */}
                                <TabPanel value={value} index={0}>
                                    <FeatureAdd />
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <FeatureDel />
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <Revenue />
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    <ManageAccount />
                                </TabPanel>
                            </Route>
                            <Route path="/Dashboard/Profile">
                                <Profile />
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
            <footer>
            </footer>
        </div>
    );
}