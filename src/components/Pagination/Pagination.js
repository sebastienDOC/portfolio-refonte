// Pagination.js
import React from 'react';
import './Pagination.css';

export default function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange  }) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageClick = (page) => {
        onPageChange(page);
    };

    return (
        <div className="pagination">
            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index + 1}
                    onClick={() => handlePageClick(index + 1)}
                    className={currentPage === index + 1 ? 'active' : ''}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
}