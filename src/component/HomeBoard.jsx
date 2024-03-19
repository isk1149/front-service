import React from 'react';
import { Typography, Card, CardContent, CardActions, IconButton, List, Container, Paper, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import { call } from '../api/apiService';
import { useNavigate } from 'react-router-dom';

const HomeBoard = (props) => {

	const [posts, setPosts] = React.useState([]);
	const { boardId } = props

	React.useEffect(()=>{
		setPosts(props.item);
	},[props.item]);

	const onClickBoardHandler = (boardId) => {
		//navigate(`/boards/${boardId}`);
	};

	const onClickPostHandler = (id) => {
		//window.location.href="/";

		// call(`/board-service/posts/${id}`, "GET", null)
    // .then((response) => {
    //   alert(response.data.content);
    // });
	};
//

	return (
		<>
					<Typography variant="h5" gutterBottom component={Link} to={`/boards/${boardId}`} sx={{ textDecoration: 'none', color: 'inherit' }}>
						<div style={{cursor: 'pointer'}}>
						{props.title}
						</div>
					</Typography>
					<Paper elevation={1}>
						<List>
							{posts.map((item) => (
								<ListItem key={item.id} component={Link} to={`/posts/${item.id}`} button>
									<ListItemText primary={item.subject} />
									<IconButton aria-label="comments">
										<VisibilityIcon />
										<Typography variant="body2" sx={{ marginLeft: 0.5 }}>{item.viewCount}</Typography>
									</IconButton>
									<IconButton aria-label="likes">
										<ThumbUpIcon />
										<Typography variant="body2" sx={{ marginLeft: 0.5 }}>{item.recommendationCount}</Typography>
									</IconButton>
									<IconButton aria-label="comments">
										<CommentIcon />
										<Typography variant="body2" sx={{ marginLeft: 0.5 }}>0</Typography>
									</IconButton>
								</ListItem>
							))}
						</List>
					</Paper>

		</>
  );
};

export default HomeBoard;