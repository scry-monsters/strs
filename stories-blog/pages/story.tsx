import React from "react";
import StoryCard from "../components/StoryCard/StoryCard";
import { useAppDispatch } from "../redux/hooks";

const story = ({ props }: any) => {
	return (
		<div>
			<StoryCard data={props} />
		</div>
	);
};

export default story;
