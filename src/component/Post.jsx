import React from 'react';
import styles from '../style/Post.module.scss';
import {useNavigate, useParams} from 'react-router-dom';
import {call} from '../api/apiService';
import moment from 'moment';

export const Post = () => {

  //writer, subject, content, viewCount, recommendationCount, createdDateTime, updatedDateTime
  const {postId} = useParams();
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
    <div className={styles.container}>
      <div className={styles.board}>{post.boardName}</div>
      <div className={styles.title}>{post.subject}</div>
      <div className={styles.info}>
        <div className={styles.left}>
          {post.writer} | {moment((post.updatedDateTime === null || post.updatedDateTime === undefined) ? post.createdDateTime : post.updatedDateTime).format('YYYY.MM.DD HH:mm')} 
        </div>
        <div>
          조회 {post.viewCount} | 추천 {post.recommendationCount} | 댓글 
        </div>
      </div>
      <p className={styles.content}>{post.content}</p>
      <div className={styles.footer}></div>
    </div>
  );
}