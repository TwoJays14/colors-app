import { Colors, ColorItem, Form } from './components';
import Nav from './Nav';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './index.css';

function App() {
  const [colours, setColours] = useState([
    { name: 'red', hex: '#FF0000' },
    { name: 'blue', hex: '#0000FF' },
    { name: 'green', hex: '#008000' },
    { name: 'yellow', hex: '#FFFF00' },
    { name: 'white', hex: '#FFFFFF' },
  ]);

  const [colour, setColour] = useState([]);

  const [input, setInput] = useState({ name: '', hex: '' });
  const [formData, setFormData] = useState([]);

  const isColourValid = (colorName) => {
    return colours.some((color) => color.name === colorName);
  };

  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route path="/colors">
          <Route
            index
            element={
              <Colors colours={colours} colour={colour} setColour={setColour} />
            }
          />
          <Route
            path="new"
            element={
              <Form
                formData={formData}
                setFormData={setFormData}
                input={input}
                setInput={setInput}
                colours={colours}
                setColours={setColours}
              />
            }
          />
          <Route
            path=":color"
            element={
              <ColorItem
                colour={colour}
                setColour={setColour}
                colours={colours}
                setColours={setColours}
              />
            }
          />

          <Route path=":color/*" element={<Colors colours={colours} />} />
        </Route>
        <Route path="*" element={<Colors colours={colours} />} />
      </Route>
    </Routes>
  );
}

export default App;
