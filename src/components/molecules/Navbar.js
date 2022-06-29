import React from 'react';
import Input from '../atoms/Input';

function Navbar({filter,setFilter}) {
  return (
    <>
      <div className="flex flex-row items-center justify-between px-4 mt-5 border-b-2 pb-5 shadow-md">
        <p className="text-white font-semibold font-poppins text-xl">
          My<span className="text-red-600">Notes</span>
        </p>
        <div className="w-72 md:w-1/4">
          <Input placeholder="Search Note" type="filter" filter={filter} setFilter={setFilter} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
