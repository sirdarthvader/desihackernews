import fetch from "isomorphic-unfetch";
import Error from "next/error";
import Layout from "../components/Layout";
import CommentList from "../components/CommentList";

class Story extends React.Component {
  static async getInitialProps({ req, res, query }) {
    let story;
    try {
      const storyId = query.id;
      const response = await fetch(
        `https://node-hnapi.herokuapp.com/item/${storyId}`
      );
      story = await response.json();
    } catch (error) {
      story = null;
      console.log(error);
    }

    return { story };
  }
  render() {
    const { story } = this.props;
    if (!story) {
      return <Error statusCode={503} />;
    }
    return (
      <div>
        <Layout goBack={true}>
          <main>
            <h1 className="story-title">
              <a href={story.url}>{story.title}</a>
            </h1>
            <div className="story-details">
              <strong className="strong">{story.points || 0} Points</strong>
              <strong className="strong">
                {story.comments_count || 0} Comments
              </strong>
              <strong className="strong">{story.time_ago}</strong>
            </div>

            {story.comments.length > 0 ? (
              <CommentList comments={story.comments} />
            ) : (
              <div>No Comments for this story so far.</div>
            )}
          </main>
        </Layout>

        <style jsx>{`
          main {
            padding: 1em;
          }
          .story-title {
            font-size: 1.2rem;
            margin: 0;
            font-weight: 300;
            padding-bottom: 0.5em;
          }
          .story-title a {
            color: #333;
            text-decoration: none;
          }
          .story-title a:hover {
            text-decoration: underline;
          }
          .story-details {
            font-size: 0.8rem;
            padding-bottom: 1em;
            border-bottom: 1px solid rgba(0, 0, 0, 0, 1);
            margin-bottom: 1em;
          }
          .strong {
            margin-right: 1em;
          }
          .story-details a {
            color: #f60;
          }
        `}</style>
      </div>
    );
  }
}

export default Story;
