import React from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

const story = ({ story }) => {
	return <div className="container" style={{height: "70vh"}}>
    <div className="text-center" style={{width: "100%"}}>
        <h1>{story.title}</h1>
        <h3>{story.storyItself}</h3>
    </div>
    </div>;
};

export const getStaticProps = async (context) => {
    const response = await fetch(`http://localhost:8000/stories/${context.params.id}`);
    const story = await response.json();
    return {
        props: {
            story
        }
    }
}
export const getStaticPaths = async (context) => {
	const response = await fetch(`http://localhost:8000/stories/`);
	const stories = await response.json();
    const ids = stories.map((story) => story.id);
    const paths = ids.map((id) => ({params: {id: id.toString()}}));
	return {
			paths,
            fallback: false
	};
};

export default story;
