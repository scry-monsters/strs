import axios from "axios";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
	fetchStories,
	storiesSelector,
} from "../../redux/slices/stories.slice";
import PaginationItem from "../Pagination/Pagination";
import StoryCard from "../StoryCard/StoryCard";
import classes from "./Stories.module.scss";

const Stories = () => {
	const dispatch = useAppDispatch();
	const stories = useAppSelector((state) => storiesSelector.selectAll(state));
	const { loading, error } = useAppSelector((state) => state.stories);
	const [currentStory, setCurrentStory] = useState(1);
	const [storiesPerPage] = useState(6);

	useEffect(() => {
		dispatch(fetchStories());
	}, [dispatch]);

	const indexOfLastStory = currentStory * storiesPerPage;
	const indexOfFirstStory = indexOfLastStory - storiesPerPage;
	const currentStories = stories.slice(indexOfFirstStory, indexOfLastStory);

	const paginate = (pageNumber: number): any => {
		setCurrentStory(pageNumber);
	};

	return (
		<div
			className="container justify-content-center d-flex align-items-center"
			style={{ width: "100%" }}
		>
			{loading && currentStories.length === 0 ? (
				<div className={classes.loadingDiv}>
					<h1>
						Seems we have a server error :( let&apos;s put a rain check on this
						chat
					</h1>
				</div>
			) : (
				<div
					className={classNames(
						"row d-flex flex-row justify-content-center align-items-center",
						classes.card__container
					)}
				>
					{currentStories.map((item) => (
						<div
							className="col-lg-4 col-md-6 col-12 py-5 justify-content-center align-items-center d-flex"
							key={item.id}
						>
							<StoryCard data={item} />
						</div>
					))}
					<PaginationItem
						storiesPerPage={storiesPerPage}
						totalStories={stories.length}
						paginate={paginate}
					/>
				</div>
			)}
		</div>
	);
};

export default Stories;
