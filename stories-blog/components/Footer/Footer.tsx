import React from "react";
import { Container } from "react-bootstrap";
import classes from "./Footer.module.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import classNames from "classnames";
import Link from "next/link";

const Footer = () => {
	return (
		<div className={classes.main__footer__container}>
			<div className="pt-4">
				<div className="text-center d-flex flex-row justify-content-center">
					<div className={classNames(classes.footer__icon, "")}>
						<Link href="https://www.instagram.com/scry_monsters/" passHref>
							<InstagramIcon />
						</Link>
					</div>
					<div className={classNames(classes.footer__icon, "")}>
						<Link href="mailto: krbnv.z@gmail.com" passHref>
							<GoogleIcon />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
