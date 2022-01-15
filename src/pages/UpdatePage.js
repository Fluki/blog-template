import { useParams } from 'react-router-dom';
import Update from '../components/Update';

function UpdatePage() {
  const { id } = useParams();

  return <Update id={id} />;
}

export default UpdatePage;
