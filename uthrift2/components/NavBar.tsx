import * as React from 'react';
import NextLink from 'next/link'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Avatar, Button, FormGroup, Menu, MenuItem, Switch } from '@mui/material';
import { AuthContext } from '../pages/api/authContext';
import { useContext } from 'react';


export default function MenuAppBar() {
    let value = useContext(AuthContext);
    const user = value[0];
    const [auth, setAuth] = React.useState<Boolean>(false);
    React.useEffect(() =>
        setAuth(user.isSignedIn)
    )
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <NextLink href="/">
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            uThrift
                        </Typography>
                    </NextLink>
                    {auth && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <Avatar alt="your pfp" src={user.pfp as string | undefined} />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'center',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <NextLink href="/store">
                                    <MenuItem>Store</MenuItem>
                                </NextLink>

                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}