import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { StoryItself } from "../../types/stories";
import StoryCard from "../StoryCard/StoryCard";
import classes from "./Stories.module.scss";

interface Props {
	stories: StoryItself[];
}
const Stories: React.FC<Props> = ({ stories }) => {
	return (
		<div
			className="container justify-content-center d-flex align-items-center"
			style={{ width: "100%" }}
		>
			<div
				className={classNames(
					"row d-flex flex-row justify-content-center align-items-center",
					classes.card__container
				)}
			>
				{stories.map((item: any) => (
					<div
						className="col-lg-4 col-md-6 col-12 py-5 justify-content-center align-items-center d-flex"
						key={item.id}
					>
						<StoryCard data={item} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Stories;
