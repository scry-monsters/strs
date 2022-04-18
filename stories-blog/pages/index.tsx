import type { NextPage } from "next";
import Header from "../components/Header/Header";
import "bootstrap/dist/css/bootstrap.css";
import Stories from "../components/Stories/Stories";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>strs</title>
				<meta name="keywords" content="scry monsters, stories, blog" />
			</Head>
			<Header />
			<Stories />
		</div>
	);
};

// export const getStaticProps = async () => {

// }
export default Home;
