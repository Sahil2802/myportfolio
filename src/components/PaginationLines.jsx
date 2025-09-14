    import React from 'react';

export default function PaginationLines({ total, current, onSectionClick }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center'}}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          onClick={() => onSectionClick && onSectionClick(i)}
          style={{
            width: i === current ? '40px' : '20px',
            height: '4px',
            background: i === current ? '#fff' : '#888',
            borderRadius: '2px',
            transition: 'width 0.1s cubic-bezier(0.4, 0, 0.2, 1), background 0.1s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer'
          }}
        />
      ))}
    </div>
  );
}
