import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { StoryItself } from "../../types/stories";
import Image from "next/image";
import userLogo from "../../images/userLogo.jpg";
import construction from "../../images/photo.png";
import Link from "next/link";
type Props = {
	data: StoryItself;
};

const StoryCard: React.FC<Props> = ({ data }) => {
	return (
		<Card style={{ width: "90%" }}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
						<Image src={userLogo} alt="my personal profile picture" />
					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={"scry"}
				subheader="September 14, 2016"
			/>
			<Link href={`/story/${data.id}`} passHref>
				<Image src={construction} alt="Paella dish" />
			</Link>
			<CardContent>
				<h2 className="text-center">{data.title}</h2>
			</CardContent>
			<Collapse timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph>{data.storyItself}</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
};

export default StoryCard;
