import classNames from "classnames";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
	fetchStories,
	storiesSelector,
} from "../../redux/slices/stories.slice";
import StoryCard from "../StoryCard/StoryCard";
import classes from "./Stories.module.scss";

const Stories = () => {
	const dispatch = useAppDispatch();
	const stories = useAppSelector((state) => storiesSelector.selectAll(state));

	useEffect(() => {
		dispatch(fetchStories());
	}, [dispatch]);

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
				{stories.map((item) => (
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
