import classNames from "classnames";
import React from "react";
import { Container } from "react-bootstrap";
import classes from "./Header.module.scss";
import headerPhotoMe from "../../images/meram.jpeg";
import Image from "next/image";

const Header = () => {
	return (
		<div
			className={classNames(
				"row text-center justify-content-center align-items-center d-flex flex-column",
				classes.image__text__container
			)}
		>
			<div className={classNames("col-12", classes.imageContainer)}>
				<Image
					className={classes.imageItself}
					src={headerPhotoMe}
					alt="Me in ram world"
				/>
			</div>
			<div
				className={classNames("col-12 text-center", classes.text__container)}
			>
				<h3>Hey</h3>
				<h5>
					glad you made it here, its been a while since we talked. hope
					you&apos;ll enjoy my stories.
				</h5>
			</div>
		</div>
	);
};

export default Header;
