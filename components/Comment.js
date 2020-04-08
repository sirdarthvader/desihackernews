const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="comment-user">{comment.user}</div>
      <div
        className="comment-content"
        dangerouslySetInnerHTML={{ __html: comment.content }}
      ></div>
      {comment.comments && (
        <div className="nested-comments">
          {comment.comments.map((nestedComments) => (
            <Comment key={nestedComments.id} comment={nestedComments} />
          ))}
        </div>
      )}

      <style jsx>{`
        .comment {
          margin-bottom: 1.5em;
        }
        .comment-user {
          font-size: 0.8rem;
          font-weight: bold;
          margin-bottom: 0.5em;
        }
        .comment-content {
          font-size: 0.7rem;
        }

        .comment-content :global(p) {
          margin: 0;
          margin-bottom: 0.5em;
          word-wrap: break;
        }
        .comment-content :global(a) {
          color: #f60;
          text-decoration: none;
        }
        .comment-content :global(pre) {
          max-width: 100%;
          overflow: scroll;
        }
        .nested-comments {
          margin-top: 1em;
          border-left: 1px solid rgba(0, 0, 0, 0.1);
          padding-left: 1em;
        }
      `}</style>
    </div>
  );
};

export default Comment;
