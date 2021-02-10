import fetch from "isomorphic-unfetch";
import StoryList from "../components/StoryList";
import Error from "next/error";
import Layout from "../components/Layout";
import Link from "next/link";
import Router from "next/router";
import Footer from "../components/Footer";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "",
    };
  }
  static async getInitialProps({ req, res, query }) {
    let error = null;
    let stories;
    let page = Number(query.page) || 1;

    try {
      const respone = await fetch(
        `https://node-hnapi.herokuapp.com/news?page=${page}`
      );
      stories = await respone.json();
      error = null;
    } catch (error) {
      stories = [];
      error = error;
    }

    return { stories, error, page };
  }

  goTopage = () => {
    let elem = document.createElement("a");
    elem.href = `/?page=${this.state.page}`;
    elem.click();
  };

  getPageNumber = (page) => {
    this.setState({
      page,
    });
  };

  render() {
    const { stories, error, page } = this.props;
    if (!stories.length && error) {
      return <Error statusCode={503} />;
    }
    return (
      <div className="main-app root hacker-news-clone">
        <Layout title="Indie hacker news">
          <StoryList stories={stories} />
          <Footer
            page={page}
            goTopage={this.goTopage}
            getPageNumber={this.getPageNumber}
          />
        </Layout>
      </div>
    );
  }
}

export default Index;
