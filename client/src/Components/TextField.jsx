import React from "react";

const TextField = ({ label, value, onChange, placeholder, description }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <div>
        <textarea
          id={label}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={4}
          cols={50}
        />
      </div>
      {description && <p>{description}</p>}
    </div>
  );
};

export default TextField;
