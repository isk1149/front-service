// Board.js
import React from 'react';
import { List, ListItem, ListItemText, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import { call } from "../api/apiService";
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = React.useState({});

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  const getPost = () => {
    call(`/board-service/posts/${postId}`, "GET", null)
    .then((response) => {
      setPost(response.data);
    });
  };

  React.useEffect(()=>{
    getPost();
  }, []);

  return (
  <>
  <Card sx={{ maxWidth: 600, margin: '20px auto' }}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {post.subject}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {post.content}
      </Typography>
      <Typography variant="body1" color="text.primary" sx={{ marginTop: '20px' }}>
        작성자: {post.creator}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        작성일: {post.createdDateTime}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={goBack}>뒤로가기</Button>
    </CardActions>
  </Card>
  </>
  );
}
