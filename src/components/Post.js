function Post(props) {


  return (
    <div>
      <div >
        <h2>{props.post.name}</h2>
        <p>{props.post.content}</p>
      </div>
    </div>
  );  
}

export default Post;