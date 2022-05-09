import React from "react";
import Image from "next/image";
import myLogo from "../../images/myLogo.png";
import classes from "./NavBar.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import classNames from "classnames";

const pages = ["About", "Source"];

const NavBar = () => {
	return (
		<nav
			className={classNames(
				classes.navbar__container,
				"navbar justify-content-between container-fluid"
			)}
		>
			<div className={classes.logo__image}>
				<Link href="/" passHref>
					<Image
						src={myLogo}
						alt="Logo of my site"
						className={classes.logo__image}
					/>
				</Link>
			</div>
		</nav>
	);
};
export default NavBar;
