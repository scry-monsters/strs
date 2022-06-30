import type { NextPage } from "next";
import Header from "../components/Header/Header";
import "bootstrap/dist/css/bootstrap.css";
import Stories from "../components/Stories/Stories";
import Head from "next/head";
import { API_URL } from "../utils/constants";

const Home: NextPage = ({ stories }: any) => {
	return (
		<div>
			<Head>
				<title>strs</title>
				<meta name="keywords" content="scry monsters, stories, blog" />
			</Head>
			<Header />
			<Stories stories={stories} />
		</div>
	);
};

export const getStaticProps = async () => {
	const res = await fetch(`${API_URL}/api/stories`);
	const stories = await res.json();

	return {
		props: {
			stories,
		},
	};
};
export default Home;
