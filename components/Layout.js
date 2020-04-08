import Link from "next/link";
import Head from "next/head";
const Layout = ({ children, title }) => {
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <div className="container">
      <nav>
        <Link href="/">
          <a>
            <span className="main-title">Desi Hacker News</span>
          </a>
        </Link>
      </nav>
      {children}
    </div>
    <style jsx>{`
      .container {
        max-width: 800px;
        margin: 0 auto;
        background-color: #f6f6ef;
      }
      nav {
        background: #f60;
        padding: 1em;
      }
      nav > * {
        display: inline-block;
        color: black;
      }
      nav a {
        text-decoration: none;
      }
      nav .main-title {
        font-weight: bold;
      }
    `}</style>
    <style global jsx>{`
      body {
        background: white;
        font-family: Verdana, Geneva, san-serif;
      }
    `}</style>
  </div>;
};

export default Layout;
