import React from 'react';
import ArchiveNote from './ArchiveNote';
import DeleteNote from './DeleteNote';

function ListNote({ id, title, body, createdAt, archived,setState,state }) {
  return (
    <>
      <div className="border-2 rounded-lg border-orange-500 p-2 flex flex-col gap-1">
        <div className="flex flex-row justify-between">
          <p className="font-poppins text-orange-600 text-xl ">{title}</p>
          <div className="flex flex-row gap-1">
            <DeleteNote id={id} state={state} setState={setState}/>
            <ArchiveNote archived={archived} id={id} state={state} setState={setState} />
          </div>
        </div>
        <p className="font-poppins text-gray-400 text-[10px]">{createdAt.substring(0, 10)}</p>
        <p>{body}</p>
      </div>
    </>
  );
}

export default ListNote;
