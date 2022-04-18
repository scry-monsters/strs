import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationItem: React.FC = ({
	storiesPerPage,
	totalStories,
	paginate,
}) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalStories / storiesPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div className="align-items-center justify-content-center mb-5 d-flex flex-row">
			{pageNumbers.map((num) => (
				<button
					className="btn btn-primary btn-lg mx-4"
					key={num}
					onClick={() => paginate(num)}
				>
					{num}
				</button>
			))}
		</div>
	);
};

export default PaginationItem;
