import React from 'react';
import { ArchiveIcon, ArrowCircleUpIcon } from '@heroicons/react/solid';
function ArchiveNote({ archived, id, state, setState }) {
  const handleChange = () => {
    if (archived === true) {
      const filter1 = state.filter((data) => data.id === id);
      const filter2 = state.filter((data) => data.id !== id);
      setState([...filter2, { ...filter1[0], archived: false }]);
    } else {
      const filter1 = state.filter((data) => data.id === id);
      const filter2 = state.filter((data) => data.id !== id);
      setState([...filter2, { ...filter1[0], archived: true }]);
    }
  };
  return (
    <>
      <div>
        {archived ? (
          <button onClick={handleChange}>
            <ArrowCircleUpIcon className="h-5 w-5 text-red-600" />
          </button>
        ) : (
          <button onClick={handleChange}>
            <ArchiveIcon className="h-5 w-5 text-red-600" />
          </button>
        )}
      </div>
    </>
  );
}

export default ArchiveNote;
