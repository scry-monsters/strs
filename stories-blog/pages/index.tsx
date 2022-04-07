import type { NextPage } from "next";
import Header from "../components/Header/Header";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import Stories from "../components/Stories/Stories";

const Home: NextPage = () => {
	return (
		<div>
			<NavBar />
			<Header />
			<Stories />
			<Footer />
		</div>
	);
};

export default Home;
