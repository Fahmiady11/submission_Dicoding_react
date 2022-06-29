import React from 'react';
import { TrashIcon } from '@heroicons/react/solid';

function DeleteNote({ id, setState, state }) {
  const handleDelete = (e) => {
    setState(state.filter((data) => data.id !== id));
  };
  return (
    <>
      <div>
        <button onClick={handleDelete}>
          <TrashIcon className="h-5 w-5 text-red-600" />
        </button>
      </div>
    </>
  );
}

export default DeleteNote;
