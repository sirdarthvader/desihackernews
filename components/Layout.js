import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
const Layout = ({ children, title, goBack }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="A clone web app for hacker news built using NextJS"
      />
    </Head>
    <div className="container">
      <nav>
        {goBack && (
          <span onClick={() => Router.back()} className="back-button">
            &#x2b05;
          </span>
        )}
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

      nav .back-button {
        font-size: 0.9rem;
        margin-right: 1em;
        cursor: pointer;
      }
    `}</style>
    <style global jsx>{`
      body {
        background: white;
        font-family: Verdana, Geneva, san-serif;
      }
    `}</style>
  </div>
);

export default Layout;
