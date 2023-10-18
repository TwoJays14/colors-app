import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const index = ({ colour, setColour, colours, setColours }) => {
  // const { color } = useParams();
  const navigate = useNavigate();
  // useEffect(() => {
  //   setColour(colours.filter((col) => col.name === color));
  // }, []);


  return (
    <div style={{ backgroundColor: `${colour?.[0]?.hex}` }}>
      <h1>{colour?.[0]?.name}</h1>
      <p>{colour?.[0]?.hex}</p>
      <button onClick={() => navigate('/colors')}>Back to colors</button>
    </div>
  );
};
export default index;
