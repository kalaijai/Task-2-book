import React, { useState } from 'react';
import './App.css';  
import BookForm from './components/BookForm';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const markAsReturned = (index) => {
    const updatedBooks = [...books];
    updatedBooks[index].status = 'Returned';
    setBooks(updatedBooks);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">📖 BOOK LENDING MANAGER</h1>
      <BookForm onAdd={addBook} />
      <BookList books={books} onReturn={markAsReturned} />
    </div>
  );
}

export default App;
