import Comment from "./Comment";

const CommentList = ({ comments }) => (
  <>
    {comments.map((comment) => (
      <Comment key={comment.id} comment={comment} />
    ))}
  </>
);

export default CommentList;
