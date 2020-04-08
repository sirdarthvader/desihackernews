import fetch from "isomorphic-unfetch";
import StoryList from "../components/StoryList";
import Error from "next/error";
import Layout from "../components/Layout";

class Index extends React.Component {
  static async getInitialProps() {
    let error = null;
    let stories;
    try {
      const respone = await fetch(
        "https://node-hnapi.herokuapp.com/news?page=1"
      );
      stories = await respone.json();
      error = null;
    } catch (error) {
      error = error;
    }

    return { stories, error };
  }
  render() {
    const { stories, error } = this.props;
    return (
      // <div className="main-app root hacker-news-clone">
      //   <Layout title="Desi hacker news">
      //     {/* <StoryList stories={stories} /> */}
      //   </Layout>
      // </div>
      <h1>desihackernews</h1>
    );
  }
}

export default Index;
