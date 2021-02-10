import Link from "next/link";
import PropTypes from "prop-types";
const StoryList = ({ stories = [] }) => (
  <div className="story-list">
    {stories.length &&
      stories.map((story) => (
        <div className="story" key={story.id}>
          <h2 className="story-title">
            <a target="_blank" href={story.url}>
              {story.title}
            </a>
          </h2>
          <div className="story-details">
            <span>{story.points || 0} points</span>
            <Link href={`story?id=${story.id}`}>
              <a>{story.comments_count || 0} comments</a>
            </Link>
          </div>
        </div>
      ))}

    <style jsx>{`
      .story-list {
        padding: 0 1em;
      }
      .story {
        padding: 1em 0;
      }
      .story-title {
        font-size: 1rem;
        font-weight: 400;
        margin: 0;
        margin-bottom: 0.5em;
      }
      .story-details {
        font-size: 9pt;
        color: #828282;
      }
      .story-title a {
        color: #333;
        text-decoration: none;
      }
      .story-title a:hover,
      .story-details a:hover {
        text-decoration: initial;
      }
      .story-detials {
        font-size: 0.8rem;
        font-weight: bold;
      }
      .story-details span {
        margin-right: 1rem;
      }
      .story-details a {
        color: #6600ff;
        text-decoration: none;
      }
    `}</style>
  </div>
);

StoryList.propTypes = {
  stories: PropTypes.array.isRequired,
};

export default StoryList;
