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

import FeatureAdd from './AddItem'
import FeatureDel from './DeleteItem'
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
export default function AdminPage() {
    const [numberMail, numNoti] = [1, 3];
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    
    let logout = () => {
        localStorage.removeItem('user')
        window.location.reload();
    };
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
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
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
                    <div className="navbar-brand"><h3>dashboard</h3></div>
                    <div className="navbar-auth">
                        <li>
                            <IconButton aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={numberMail} color="secondary">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton aria-label="show 4 new notifications" color="inherit">
                                <Badge badgeContent={numNoti} color="secondary" showZero>
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
                        <Tab className="tab" label="add" {...a11yProps(0)} />
                        <Tab className="tab" label="delete" {...a11yProps(1)} />
                        <Tab className="tab" label="manage" {...a11yProps(2)} />
                    </Tabs>
                </div>
                <div className="admin_layout">
                    {/* here add components contents */}
                    <TabPanel value={value} index={0}>
                        <FeatureAdd />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <FeatureDel />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Manage
                    </TabPanel>
                </div>
            </div>
            <footer>

            </footer>
        </div>
    );
}
