import Post from '../components/Post';

function Home() {

  const test = { name:"prvi", content:"post" }

  return (
    <div>
      <h1>Blog sajt</h1>
      <p>Ide gas</p>
      <Post post={test} />

    </div>
  );
}

export default Home;