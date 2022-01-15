import { FiAirplay } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Post(props) {
  return (
    <Link to={`/blogs/${props.post.id}`}>
      <div class="post">
        <h1>
          {props.post.title} <FiAirplay />
        </h1>
        <p id="date">{props.post.date}</p>
        <span className="contentWrap">
          <img src={props.post.image} alt={'log'} id="img" />
          <p id="content">{props.post.description}</p>
        </span>
      </div>
    </Link>
  );
}

export default Post;
