import React, { useState } from 'react';
import Content from '../molecules/Content';
import Navbar from '../molecules/Navbar';

function NotesPage() {
  const [filter, setFilter] = useState('');
  return (
    <>
      <Navbar filter={filter} setFilter={setFilter} />
      <Content filter={filter} />
    </>
  );
}

export default NotesPage;
