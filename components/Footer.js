import Link from "next/link";
const Footer = ({ page, getPageNumber, goTopage }) => (
  <footer>
    {page > 1 && (
      <a className="footer-previous" onClick={() => Router.back()}>
        {" "}
        Previous Page
      </a>
    )}
    <input
      className="footer-page-input"
      type="number"
      name="page-number"
      id="page-number"
      onChange={(e) => getPageNumber(e.target.value)}
      defaultValue={page}
    />
    <input
      type="submit"
      className="submit"
      value="Go"
      onClick={() => goTopage()}
    />
    <Link href={`/?page=${page + 1}`}>
      <a className="footer-next">Next Page</a>
    </Link>

    <style jsx>
      {`
        footer {
          padding: 1em;
        }
        footer a {
          font-weight: bold;
          font-size: 0.8rem;
          color: black;
          text-decoration: none;
          margin-right: 1em;
          cursor: pointer;
          width: 50px;
          padding: 0.2em 0.5em;
        }

        footer a:hover {
          text-decoration: underline;
        }

        footer input {
          width: 40px;
          height: 20px;
          margin-right: 1em;
        }
        footer .submit {
          width: 50px;
          margin-right: 1em;
          cursor: pointer;
        }
      `}
    </style>
  </footer>
);

export default Footer;
