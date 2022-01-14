import { useParams } from "react-router-dom";
import SinglePost from "./SinglePost";

function SinglePostPage() {
  const { id } = useParams();
  
  return (
    <SinglePost id={id}/>
    ) 
}

export default SinglePostPage;