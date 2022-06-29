import React, { useState, useEffect } from 'react';
import TitleContent from '../atoms/TitleContent';
import { getInitialData } from '../../utils/index';
import CardNote from '../atoms/CardNote';
import AddNote from '../atoms/AddNote';

function Content({ filter }) {
  const [maxInput, setMaxInput] = useState(50);
  const [state, setState] = useState([]);

  useEffect(() => {
    return () => {
      setState(getInitialData);
    };
  }, []);

  let temp;
  if (filter === '') {
    temp = state;
  } else {
    temp = state.filter((data) => data.title.toLowerCase().includes(filter));
  }
  const check = state.filter((data) => data.archived === false);
  const check2 = state.filter((data) => data.archived === true);
  
  return (
    <>
      <div className="px-4 mt-10 flex gap-10 flex-col justify-center items-start mb-10">
        <div className="w-full flex flex-col gap-2 md:w-2/5 mx-auto">
          <TitleContent title="Buat Catatan" />
          <p className="text-right text-sm text-orange-400">
            Sisa Karakter: {maxInput}
          </p>
          <AddNote
            state={state}
            setState={setState}
            setMaxInput={setMaxInput}
          />
        </div>
        <div className="w-full flex flex-col gap-2 md:w-2/5 mx-auto">
          <TitleContent title="Catatan Aktif" />
          <div className="flex flex-col gap-4">
            {check.length === 0 ? (
              <div className="text-white text-center">Tidak ada Note</div>
            ) : (
              temp &&
              temp
                .filter((data) => data.archived !== true)
                .map((data) => (
                  <CardNote
                    id={data.id}
                    key={data.id}
                    title={data.title}
                    body={data.body}
                    createdAt={data.createdAt}
                    archived={data.archived}
                    setState={setState}
                    state={state}
                  />
                ))
            )}
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 md:w-2/5 mx-auto">
          <TitleContent title="Arsip" />

          <div className="flex flex-col gap-4">
            {check2.length === 0 ? (
              <div className="text-white text-center">Tidak ada Note</div>
            ) : (
              temp &&
              temp
                .filter((data) => data.archived !== false)
                .map((data) => (
                  <CardNote
                    id={data.id}
                    key={data.id}
                    title={data.title}
                    body={data.body}
                    createdAt={data.createdAt}
                    archived={data.archived}
                    setState={setState}
                    state={state}
                  />
                ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
