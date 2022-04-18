import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AppBar from "@mui/material/AppBar";
import Image from "next/image";
import myLogo from "../../images/myLogo.png";
import classes from "./NavBar.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import { Nav } from "react-bootstrap";

const pages = ["About", "Source"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);

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
		<AppBar position="static" className={classes.appBar}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Link href="/" passHref>
						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
						>
							<div className="pt-2" style={{ width: "120px !important" }}>
								<Image
									className={classes.myLogo__image}
									src={myLogo}
									alt="myLogo"
								/>
							</div>
						</Typography>
					</Link>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
							style={{ color: "black" }}
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center" className={classes.navBarText}>
										{page !== "Source" ? (
											<>
												<Link href="/about">{page}</Link>
											</>
										) : (
											<>
												{page}{" "}
												<a href="https://github.com/scry-monsters/strs">
													<GitHubIcon />
												</a>
											</>
										)}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
					>
						<div className="pt-2" style={{ width: "120px !important" }}>
							<Image
								className={classes.myLogo__image}
								src={myLogo}
								alt="myLogo"
							/>
						</div>
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: "black", display: "block" }}
								className={classes.navBarText}
							>
								{page !== "Source" ? (
									<>
										<Link href="/about" passHref>
											<Nav.Link style={{ color: "black" }}>{page}</Nav.Link>
										</Link>
									</>
								) : (
									<Link href="https://github.com/scry-monsters/strs" passHref>
										<Nav.Link style={{ color: "black" }}>
											{page} <GitHubIcon />
										</Nav.Link>
									</Link>
								)}
							</Button>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default NavBar;
