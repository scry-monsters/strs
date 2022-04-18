import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/NavBar";

const Layout = ({ children }: any) => {
	return (
		<>
			<Navbar />
			<div>
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
};

export default Layout;
