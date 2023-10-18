import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const index = (props) => {
  const { colours, setColour, colour } = props;
  
  const colourLog = (inputColour) => {
    setColour(inputColour)
  // console.log(colour)
}
useEffect(() => {
  console.log(colour); 
}, [colour]);


  return (
    <>
      <h1>All Colors</h1>
      {colours.map((col, i) => {
        return (
          <div key={i}>
            <p>Color: {col.name}</p>
            <p>Hex: {col.hex}</p>
            <button onClick={() => colourLog(col.name)}>
              <Link to={`/colors/${col.name}`}>See Color</Link> 
            </button>
          </div>
        );
      })}
    </>
  );
};
export default index;
