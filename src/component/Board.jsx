// Board.js
import React from 'react';
import { List, ListItem, ListItemText, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import { call } from "../api/apiService";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import {Typography} from '@mui/material';

function Board() {
  const { boardId } = useParams();
  const [posts, setPosts] = React.useState([]);
  const [pageNumber, setPageNumber] = React.useState(0);
  const [pageArray, setPageArray] = React.useState([]);
  const [totalPages, setTotalPages] = React.useState(0);

  const getPosts = (page=1, size=3) => {
    call(`/board-service/boards/${boardId}/posts?page=${page}&size=${size}`, "GET", null)
    .then((response) => {
      setPosts(response.data.content);
      setPageNumber(() => response.data.number + 1);
      setTotalPages(response.data.totalPages);
    });
  };

  
  const settingPageNumber = () => {
    const array = [];
    for(let i = 1; i <= totalPages; i++) {
      array.push(i);
    }
    setPageArray(array);
    console.log(setPageArray);
  };

  
  React.useEffect(()=>{
    getPosts();
  }, []);

  React.useEffect(()=>{
    settingPageNumber();
  }, [totalPages]);

  return (
    // <Paper style={{ margin: 16, padding: 16 }}>
    //   <List>
    //     {posts.map((post) => (
    //       <ListItem key={post.id} button component={Link} to={`/post/${post.id}`}>
    //         <ListItemText primary={post.subject} />
    //         <ListItemText primary={post.writer} />
    //         <ListItemText primary={post.viewCount} />
    //         <ListItemText primary={post.recommendationCount} />
    //       </ListItem>
    //     ))}
    //   </List>
    // </Paper>
    <>
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>제목</TableCell>
            <TableCell align="right">작성자</TableCell>
            <TableCell align="right">조회수</TableCell>
            <TableCell align="right">추천수</TableCell>
            <TableCell align="right">작성일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post) => (
            <TableRow
              key={post.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                  <Typography component={Link} to={`/posts/${post.id}`} style={{ textDecoration: 'none' }}>
                    {post.subject}
                  </Typography>
              
                {/* <Link component={RouterLink} to={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
                  {post.subject}
                  
                </Link> */}
                {/* component={Link} to={`/boards/${boardId}`} */}
              </TableCell>
              <TableCell align="right">{post.writer}</TableCell>
              <TableCell align="right">{post.viewCount}</TableCell>
              <TableCell align="right">{post.recommendationCount}</TableCell>
              <TableCell align="right">{post.createdDateTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div style={{textAlign: "center", marginTop: "10px"}}>
      {pageArray.map(page => (
        page === pageNumber ? <button key={page} style={{fontWeight: "bold", marginRight: "10px"}} onClick={()=>getPosts(page)}>{page}</button> : <button key={page} style={{marginRight: "10px"}} onClick={()=>getPosts(page)}>{page}</button>
      ))}
    </div>
    </>
  );
}

export default Board;