import React from 'react';
import {
  AppBar,
  Box,
  Button,
  ButtonProps,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography
} from "@mui/material";
import {NavLink} from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styled from "@emotion/styled";

type Props = {
  isAuthenticated: boolean;
}

const LoginButton = styled(Button)<ButtonProps>({
  color: "#fff !important",
  backgroundColor: "#f8913d",
  '&:hover': {
    backgroundColor: "#f07c22",
  },
});

const Header = ({ isAuthenticated }: Props) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink to={'/'}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 4,
                display: {xs: 'none', md: 'flex'},
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              CAMPING DES LAVANDES
            </Typography>
          </NavLink>
          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
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
                display: {xs: 'block', md: 'none'},
              }}
            >
              <NavLink to="/about">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">A propos</Typography>
                </MenuItem>
              </NavLink>
              <NavLink to="/locations">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Locations</Typography>
                </MenuItem>
              </NavLink>
              <NavLink to="/provence">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">La Provence</Typography>
                </MenuItem>
              </NavLink>
              <NavLink to="/contact">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Contact</Typography>
                </MenuItem>
              </NavLink>
            </Menu>
          </Box>
          <NavLink to={'/'}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 4,
                display: {xs: 'flex', md: 'none'},
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              CAMPING DES LAVANDES
            </Typography>
          </NavLink>
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            <NavLink to="/about">
              <Button
                onClick={handleCloseNavMenu}
                sx={{my: 2, color: 'black', display: 'block'}}
              >
                A propos
              </Button>
            </NavLink>
            <NavLink to="/locations">
              <Button
                onClick={handleCloseNavMenu}
                sx={{my: 2, color: 'black', display: 'block'}}
              >
                Locations
              </Button>
            </NavLink>
            <NavLink to="/provence">
              <Button
                onClick={handleCloseNavMenu}
                sx={{my: 2, color: 'black', display: 'block'}}
              >
                La Provence
              </Button>
            </NavLink>
            <NavLink to="/contact">
              <Button
                onClick={handleCloseNavMenu}
                sx={{my: 2, color: 'black', display: 'block'}}
              >
                Contact
              </Button>
            </NavLink>
          </Box>

          {isAuthenticated &&
            <Box sx={{flexGrow: 0}}>
              <Tooltip title="">
                <IconButton onClick={handleOpenUserMenu}>
                  <PersonIcon/><ArrowDropDownIcon/>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{mt: '45px'}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <NavLink to="/user">
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Mon compte</Typography>
                  </MenuItem>
                </NavLink>
                <NavLink to="/user/reservation">
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Mes réservations</Typography>
                  </MenuItem>
                </NavLink>
                <NavLink to="/logout">
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Se déconnecter</Typography>
                  </MenuItem>
                </NavLink>
              </Menu>
            </Box>
          }
          {!isAuthenticated &&
            <Box sx={{flexGrow: 0}}>
              <NavLink to="/login">
                <LoginButton startIcon={<PersonIcon/>} onClick={handleCloseNavMenu}> Espace client </LoginButton>
              </NavLink>
            </Box>
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;