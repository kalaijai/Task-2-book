import React, { useState } from 'react';

function BookForm({ onAdd }) {
  const [book, setBook] = useState('');
  const [borrower, setBorrower] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book && borrower && returnDate) {
      onAdd({ book, borrower, returnDate, status: 'Borrowed' });
      setBook('');
      setBorrower('');
      setReturnDate('');
    }
  };

  return (
    <form className="card p-4 shadow mb-4" onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Book Title"
            value={book}
            onChange={(e) => setBook(e.target.value)}
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Borrower Name"
            value={borrower}
            onChange={(e) => setBorrower(e.target.value)}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="date"
            className="form-control"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            required
          />
        </div>
        <div className="col-md-1 d-grid">
          <button type="submit" className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </form>
  );
}

export default BookForm;
