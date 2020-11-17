import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';

export default function Account ({logoutHandler}) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {   
        setAnchorEl(null);
      };


    return (
            <div>
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <div class="notification">
              <AccountCircleIcon style={{ color: '#d9d9d9' }} />
              </div>
                
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}> <SettingsIcon/> My Account</MenuItem>
                {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                <MenuItem onClick={() => logoutHandler()}> <ExitToAppIcon/> Logout</MenuItem>
              </Menu>
            </div>
    )
}