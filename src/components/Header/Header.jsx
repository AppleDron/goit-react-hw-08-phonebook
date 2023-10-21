import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { NavLink } from 'react-router-dom';
import { HeadersStyles } from 'mainStyles/styles';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import LogoutIcon from '@mui/icons-material/Logout';
import User from 'components/User/User';

const pages = ['LogIn', 'SignUp'];
const barPages = ['Home', 'Contacts'];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { token } = useSelector(state => state.auth);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" color="transparent">
      <HeadersStyles>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <MenuBookIcon
              sx={{
                display: { xs: 'none', md: 'flex' },
                mr: 1,
                color: 'white',
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              PHONEBOOK
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="white"
              >
                <MenuIcon sx={{ color: 'white' }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {!token &&
                  pages.map(page => (
                    <NavLink
                      to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                      key={page}
                    >
                      <MenuItem>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    </NavLink>
                  ))}
                {token &&
                  barPages.map(page => (
                    <NavLink
                      to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                      key={page}
                    >
                      <MenuItem>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    </NavLink>
                  ))}
              </Menu>
            </Box>
            <MenuBookIcon
              sx={{
                display: { xs: 'flex', md: 'none' },
                mr: 1,
                color: 'white',
              }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              PHONEBOOK
            </Typography>
            {window.innerWidth < 900 && isLoggedIn && (
              <>
                <User />
                <IconButton size="large" color="white" onClick={handleLogout}>
                  <LogoutIcon sx={{ color: 'white' }} />
                </IconButton>
              </>
            )}
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: 'none',
                  md: 'flex',
                  justifyContent: 'flex-start',
                },
              }}
            >
              {token &&
                barPages.map(page => (
                  <NavLink
                    to={`/${page === 'Home' ? '' : page.toLowerCase()}`}
                    key={page}
                  >
                    <Button
                      key={page}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page}
                    </Button>
                  </NavLink>
                ))}
              {!token && (
                <NavLink to={'/'} key="home">
                  <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                    Home
                  </Button>
                </NavLink>
              )}
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: 'none',
                  md: 'flex',
                  justifyContent: 'flex-end',
                },
              }}
            >
              {!token &&
                pages.map(page => (
                  <NavLink to={`/${page.toLowerCase()}`} key={page}>
                    <Button
                      key={page}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page}
                    </Button>
                  </NavLink>
                ))}

              {isLoggedIn && (
                <>
                  <User />
                  <IconButton size="large" color="white" onClick={handleLogout}>
                    <LogoutIcon sx={{ color: 'white' }} />
                  </IconButton>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </HeadersStyles>
    </AppBar>
  );
}
export default Header;
