import React from "react";
import Image from "next/image";
import myLogo from "../../images/myLogo.png";
import classes from "./NavBar.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import classNames from "classnames";
import BurgerMenu from "./BurgerMenu";

const pages = ["About", "Source"];

const NavBar = () => {
	return (
		<div className={classNames(classes.navbar__container, "d-flex flex-row")}>
			<div className="row" style={{ width: "100%" }}>
				<div className="col-3 align-items-center justify-content-center pt-3">
					<BurgerMenu />
				</div>
				<div
					className={classNames(
						classes.logo__image,
						"col-6 align-items-center justify-content-center pt-3"
					)}
				>
					<Link href="/" passHref>
						<Image
							src={myLogo}
							alt="Logo of my site"
							className={classes.logo__image}
						/>
					</Link>
				</div>
				<div className="col-3"></div>
			</div>
		</div>
	);
};
export default NavBar;
