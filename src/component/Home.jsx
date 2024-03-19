
import { call } from "../api/apiService";
import HomeBoard from "./HomeBoard";
import { Container, Grid } from "@mui/material";
import React from "react";

export default function Home() {

  // const [boardOne, setBoardOne] = React.useState("");
  const boardOneId = "7b9a7c55a9334d049e8a880cf216e28e";
  const [boardOnePosts, setBoardOnePosts] = React.useState([]);
  // const [boardTwo, setBoardTwo] = React.useState("");
  const boardTwoId = "7b451b7e6cbe41e282f2d499c4fe2fcf";
  const [boardTwoPosts, setBoardTwoPosts] = React.useState([]);
  // const [boardThree, setBoardThree] = React.useState("");
  const boardThreeId = "9292264cc3aa410b96d14c7ea2b5f335";
  const [boardThreePosts, setBoardThreePosts] = React.useState([]);
  
  // const getBoardOne = () => {
  //   call("/board-service/boards/7b9a7c55a9334d049e8a880cf216e28e", "GET", null)
  //   .then((response) => {
  //     setBoardOne(response.data.boardName);
  //   });
  // };
  const getBoardOnePosts = () => {
    call("/board-service/boards/7b9a7c55a9334d049e8a880cf216e28e/posts/home", "GET", null)
    .then((response) => {
      //setBoardOne(response.data[0].boardName);
      setBoardOnePosts(response.data);
    });
  };
  // const getBoardTwo = () => {
  //   call("/board-service/boards/7b451b7e6cbe41e282f2d499c4fe2fcf", "GET", null)
  //   .then((response) => {
  //     setBoardTwo(response.data.boardName);
  //   });
  // };
  const getBoardTwoPosts = () => {
    call("/board-service/boards/7b451b7e6cbe41e282f2d499c4fe2fcf/posts/home", "GET", null)
    .then((response) => {
      setBoardTwoPosts(response.data);
    });
  };
  // const getBoardThree = () => {
  //   call("/board-service/boards/9292264cc3aa410b96d14c7ea2b5f335", "GET", null)
  //   .then((response) => {
  //     setBoardThree(response.data.boardName);
  //   });
  // };
  const getBoardThreePosts = () => {
    call("/board-service/boards/9292264cc3aa410b96d14c7ea2b5f335/posts/home", "GET", null)
    .then((response) => {
      setBoardThreePosts(response.data);
    });
  };

  React.useEffect(()=>{
    getBoardOnePosts();
    getBoardTwoPosts();
    getBoardThreePosts();
  }, []); //최초 화면 로딩시 동작

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <HomeBoard title="QA" boardId={boardOneId} item={boardOnePosts} />
          </Grid>
          <Grid item xs={12} md={6}>
            <HomeBoard title="지식" boardId={boardTwoId} item={boardTwoPosts} />
          </Grid>
          <Grid item xs={12} md={6}>
            <HomeBoard title="커뮤니티" boardId={boardThreeId} item={boardThreePosts} />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
