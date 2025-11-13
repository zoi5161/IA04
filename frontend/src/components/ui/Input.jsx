import React from 'react';

export const Input = React.forwardRef(
  ({ label, id, error, ...props }, ref) => {
    return (
      <div>
        {label && <label htmlFor={id}>{label}</label>}
        <input id={id} ref={ref} {...props} />
        {error && <p style={{ color: 'red' }}>{error.message}</p>}
      </div>
    );
  }
);