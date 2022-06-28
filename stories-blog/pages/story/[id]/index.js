import Link from "next/link";
import React from "react";
import { API_URL } from "../../../utils/constants";

const story = ({ story }) => {
	return <div className="container">
    <div className="text-center" style={{width: "100%"}}>
        <h1>{story.title}</h1>
        <h3>{story.storyItself}</h3>
        <Link href="/">Back</Link>
    </div>
    </div>;
};

export const getStaticProps = async (context) => {
    const res = await fetch(`${API_URL}/api/stories/${context.params.id}`)
  
    const story = await res.json()
  
    return {
      props: {
        story,
      },
    }
  }
  
  export const getStaticPaths = async () => {
    const res = await fetch(`${API_URL}/api/stories`)
  
    const stories = await res.json()
  
    const ids = stories.map((story) => story.id)
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))
  
    return {
      paths,
      fallback: false,
    }
  }


export default story;
