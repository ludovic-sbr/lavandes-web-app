import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
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
		<AppBar position="fixed" style={{ background: "#fff" }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
						<Typography
							variant="h6"
							noWrap
							component="a"
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: '#000',
								textDecoration: 'none',
							}}
						>
							<Link to="/">
								LOGO
							</Link>
						</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
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
							<MenuItem onClick={handleCloseNavMenu}>
								<Link to="/">
									<Typography textAlign="center">Accueil</Typography>
								</Link>
							</MenuItem>
							<MenuItem onClick={handleCloseNavMenu}>
								<Link to="/locations">
									<Typography textAlign="center">Emplacements et locations</Typography>
								</Link>
							</MenuItem>
						</Menu>
					</Box>
					<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						LOGO
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						<Link to="/">
							<Button
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								Accueil
							</Button>
						</Link>
						<Link to="/locations">
							<Button
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								Emplacements et locations
							</Button>
						</Link>
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<AccountCircle style={{ color: "black" }} />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
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
							<MenuItem onClick={handleCloseUserMenu}>
								<Link to="/profile">
									<Typography textAlign="center">Mon compte</Typography>
								</Link>
							</MenuItem>
							<MenuItem onClick={handleCloseUserMenu}>
								<Link to="/orders">
									<Typography textAlign="center">Mes commandes</Typography>
								</Link>
							</MenuItem>
							<MenuItem onClick={handleCloseUserMenu}>
								<Typography textAlign="center">Déconnexion</Typography>
							</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;
