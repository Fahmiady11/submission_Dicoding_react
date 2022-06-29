import React, { useState } from 'react';
import Input from './Input';
const uuidv4 = require('uuid');
function AddNote({ state, setState, setMaxInput }) {
  const [data, setData] = useState({
    id: uuidv4,
    title: '',
    body: '',
    createdAt: new Date().toISOString(),
    archived: false,
  });

  const handleSubmit = (e) => {
    setState([...state,data]);
  };
  
  const handleChange = (e, type) => {
    if (type === 'textArea') {
      setData({ ...data, body: e.target.value });
    }
  };
  return (
    <>
      <Input
        placeholder="Isikan Judul Note..."
        setMaxInput={setMaxInput}
        data={data}
        setData={setData}
        type="add"
      />
      <textarea
        onChange={(e) => handleChange(e, 'textArea')}
        className="backdrop-blur-sm mt-2 bg-white/20 border-2 border-orange-500 rounded-lg w-full px-2 py-1 focus:text-white"
        placeholder="Isikan Catatnmu diSini..."
      />
      <button
        onClick={handleSubmit}
        className="backdrop-blur-sm mt-2 bg-orange-600 border-2 border-orange-500 rounded-lg w-full px-2 py-1 hover:bg-orange-700"
      >
        Create
      </button>
    </>
  );
}

export default AddNote;
