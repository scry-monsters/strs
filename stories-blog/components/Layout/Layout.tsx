import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/NavBar";

const Layout = ({ children }: any) => {
	return (
		<>
			<Navbar />
			<Container>
				<main>{children}</main>
			</Container>
			<Footer />
		</>
	);
};

export default Layout;
