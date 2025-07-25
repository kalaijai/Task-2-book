import React from 'react';

function BookList({ books, onReturn }) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered text-center align-middle">
        <thead className="table-dark">
          <tr>
            <th>Book</th>
            <th>Borrower</th>
            <th>Return Date</th>
            <th>Status</th>
            <th>Mark Returned</th>
          </tr>
        </thead>
        <tbody>
          {books.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-muted">No books added yet.</td>
            </tr>
          ) : (
            books.map((book, idx) => (
              <tr key={idx}>
                <td>{book.book}</td>
                <td>{book.borrower}</td>
                <td>{book.returnDate}</td>
                <td>
                  <span className={`badge ${book.status === 'Returned' ? 'bg-success' : 'bg-warning text-dark'}`}>
                    {book.status}
                  </span>
                </td>
                <td>
                  {book.status !== 'Returned' && (
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => onReturn(idx)}
                    >
                      Mark as Returned
                    </button>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;
