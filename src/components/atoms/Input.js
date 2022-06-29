import React from 'react';

function Input({
  placeholder,
  setMaxInput,
  data,
  setData,
  type,
  filter,
  setFilter,
}) {
  const handleChange = (e, type) => {
    if (type === 'add') {
      setData({ ...data, title: e.target.value });
      setMaxInput(e.target.maxLength - e.target.value.length);
    } else if (type === 'filter') {
      setFilter(e.target.value);
    }
  };

  return (
    <>
      <input
        className="backdrop-blur-sm  bg-white/20 border-2 border-orange-500 rounded-full w-full px-2 py-1 focus:text-white"
        placeholder={placeholder}
        maxLength={50}
        onChange={(e) => handleChange(e, type)}
      />
    </>
  );
}

export default Input;
