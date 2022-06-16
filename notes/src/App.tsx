import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NotesBox } from './NotesBox/NotesBox';
import { Edit } from './Edit/Edit';

function App() {
  return (
    <div>
      <NotesBox />
      <Edit />
    </div>
  );
}

export default App;
