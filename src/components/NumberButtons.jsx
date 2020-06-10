import React from 'react';

export default function NumberButtonGroup({ incrementCount }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((number) => (
        <button
          type="button"
          key={number}
          onClick={() => incrementCount(number)}
        >
          {number}
        </button>
      ))}
    </p>
  );
}
