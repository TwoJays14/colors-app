import { useParams, useNavigate, Link } from 'react-router-dom';

const index = (props) => {

  const navigate = useNavigate();
  const { colours, input, setInput, setColours } = props;

  const handleInput = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFormData = {
      name: input.name,
      hex: input.hex,
    };

    setColours([...colours, newFormData]);

    setInput({
      name: '',
      hex: '',
    });

    navigate('/colors')
  };

  return (
    <div>
      <h1>Add New Color</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInput}
          name="name"
          type="text"
          value={input.name}
          placeholder="Color Name"
          required
        />
        <input
          onChange={handleInput}
          name="hex"
          value={input.hex}
          type="text"
          placeholder="Hex Code"
          required
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default index;
